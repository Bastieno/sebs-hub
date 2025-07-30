import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
