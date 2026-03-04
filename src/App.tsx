import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Screenshots } from './components/Screenshots'
import { Privacy } from './components/Privacy'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { StickyCTA } from './components/StickyCTA'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Privacy />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}

export default App
