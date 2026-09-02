import Hero from '@/components/home/Hero'
import HomeStats from '@/components/home/HomeStats'
import ServiceCards from '@/components/home/ServiceCards'
import PressReleases from '@/components/home/PressReleases'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HomeSustainability from '@/components/home/HomeSustainability'
import WhyChooseUs from '@/components/home/WhyChooseUs'

export default function Home() {
  return (
    <main className="dh">
      <Navbar />
      <Hero />
      <HomeStats />
      <WhyChooseUs />
      <PressReleases />
      <ServiceCards />
      <HomeSustainability />
      <Footer />
    </main>
  )
}
