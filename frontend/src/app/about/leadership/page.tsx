import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ExecutiveLeadership from '@/components/home/ExecutiveLeadership'

export const metadata: Metadata = {
  title: 'Executive Leadership',
  description:
    'Meet the executive leadership guiding Minim Global Services and its divisions across Sierra Leone.',
}

export default function LeadershipPage() {
  return (
    <main>
      <Navbar />
      <ExecutiveLeadership />
      <Footer />
    </main>
  )
}
