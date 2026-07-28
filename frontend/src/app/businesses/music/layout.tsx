import MusicShell from '@/components/music/MusicShell'

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MusicShell>{children}</MusicShell>
}
