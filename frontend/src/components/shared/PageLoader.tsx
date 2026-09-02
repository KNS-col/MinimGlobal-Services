'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default function PageLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [navigating, setNavigating] = useState(false)

  // Initial page load
  useEffect(() => {
    const hide = () => setVisible(false)
    if (document.readyState === 'complete') {
      const t = window.setTimeout(hide, 450)
      return () => window.clearTimeout(t)
    }
    window.addEventListener('load', hide)
    const fallback = window.setTimeout(hide, 1800)
    return () => {
      window.removeEventListener('load', hide)
      window.clearTimeout(fallback)
    }
  }, [])

  // Brief spinner on client route changes
  useEffect(() => {
    setNavigating(true)
    const t = window.setTimeout(() => setNavigating(false), 400)
    return () => window.clearTimeout(t)
  }, [pathname])

  const showing = visible || navigating

  useEffect(() => {
    document.body.classList.toggle('loader-open', showing)
    return () => document.body.classList.remove('loader-open')
  }, [showing])

  if (!showing) return null

  return (
    <div className={`mg-loader-overlay ${navigating && !visible ? 'is-route' : ''}`}>
      <LoadingSpinner
        fullScreen
        label={visible ? 'Loading Minim Global…' : 'Loading…'}
      />
    </div>
  )
}
