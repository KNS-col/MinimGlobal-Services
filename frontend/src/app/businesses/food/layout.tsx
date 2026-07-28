import FoodShell from '@/components/food/FoodShell'

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <FoodShell>{children}</FoodShell>
}
