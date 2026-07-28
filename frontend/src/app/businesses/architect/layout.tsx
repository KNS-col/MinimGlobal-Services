import ArchitectShell from '@/components/architect/ArchitectShell'

export default function ArchitectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ArchitectShell>{children}</ArchitectShell>
}
