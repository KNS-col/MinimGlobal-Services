import Hero from '@/components/home/Hero'
import HomeStats from '@/components/home/HomeStats'
import ServiceCards from '@/components/home/ServiceCards'
import PressReleases from '@/components/home/PressReleases'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ImpactSection from '@/components/home/ImpactSection'
import HomeReports from '@/components/home/HomeReports'
import HomeSustainability from '@/components/home/HomeSustainability'

export default function Home() {
  return (
    <main className="dh">
      <Navbar />
      <Hero />
      <HomeStats />
      <ImpactSection />
      <PressReleases />
      <ServiceCards />
      <HomeReports />
      <HomeSustainability />
      <Footer />
    </main>
  )
}
