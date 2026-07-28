import ClothingShell from '@/components/clothing/ClothingShell'

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClothingShell>{children}</ClothingShell>
}
