import StudiosShell from '@/components/studios/StudiosShell'

export default function StudiosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <StudiosShell>{children}</StudiosShell>
}
