'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { foodProducts, type FoodProduct } from '@/data/food'

export type CartLine = {
  productId: string
  quantity: number
}

type FoodCartContextValue = {
  lines: CartLine[]
  itemCount: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (productId: string, quantity?: number) => void
  setQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  getProduct: (productId: string) => FoodProduct | undefined
}

const STORAGE_KEY = 'minim-food-cart'
const FoodCartContext = createContext<FoodCartContextValue | null>(null)

function normalizeLines(raw: unknown): CartLine[] {
  if (!Array.isArray(raw)) return []
  return raw
    .filter(
      (line): line is Partial<CartLine> =>
        !!line &&
        typeof line === 'object' &&
        typeof (line as CartLine).productId === 'string'
    )
    .map((line) => ({
      productId: line.productId as string,
      quantity: Math.max(1, Number(line.quantity) || 1),
    }))
}

export function FoodCartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw =
        localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem('minim-food-cart-v2')
      if (raw) setLines(normalizeLines(JSON.parse(raw)))
    } catch {
      // ignore bad storage
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines, ready])

  const addItem = useCallback((productId: string, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId)
      if (existing) {
        return prev.map((l) =>
          l.productId === productId
            ? { ...l, quantity: l.quantity + quantity }
            : l
        )
      }
      return [...prev, { productId, quantity }]
    })
    setIsOpen(true)
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.productId !== productId))
      return
    }
    setLines((prev) =>
      prev.map((l) => (l.productId === productId ? { ...l, quantity } : l))
    )
  }, [])

  const removeItem = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const getProduct = useCallback(
    (productId: string) => foodProducts.find((p) => p.id === productId),
    []
  )

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  )

  const subtotal = useMemo(
    () =>
      lines.reduce((sum, l) => {
        const product = foodProducts.find((p) => p.id === l.productId)
        return sum + (product ? product.price * l.quantity : 0)
      }, 0),
    [lines]
  )

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      getProduct,
    }),
    [
      lines,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      getProduct,
    ]
  )

  return (
    <FoodCartContext.Provider value={value}>{children}</FoodCartContext.Provider>
  )
}

export function useFoodCart() {
  const ctx = useContext(FoodCartContext)
  if (!ctx) {
    throw new Error('useFoodCart must be used within FoodCartProvider')
  }
  return ctx
}
