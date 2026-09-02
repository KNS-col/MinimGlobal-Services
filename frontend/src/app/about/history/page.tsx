import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HistoryVisionMission from '@/components/home/HistoryVisionMission'

export const metadata: Metadata = {
  title: 'History, Mission & Vision',
  description:
    'From a single media studio in 2018 to a five-industry group — the history, strategy, mission, and vision behind Minim Global Services.',
}

export default function HistoryPage() {
  return (
    <main>
      <Navbar />
      <HistoryVisionMission />
      <Footer />
    </main>
  )
}
