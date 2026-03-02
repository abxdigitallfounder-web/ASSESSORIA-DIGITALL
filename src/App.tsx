import './index.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogosBar } from './components/LogosBar'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Features } from './components/Features'
import { CTABanner } from './components/CTABanner'
import { Process } from './components/Process'
import { Testimonial } from './components/Testimonial'
import { FAQ } from './components/FAQ'
import { Articles } from './components/Articles'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-black">
      <Header />
      <main className="pt-[70px]">
        <Hero />
        <LogosBar />
        <About />
        <CaseStudies />
        <Features />
        <CTABanner />
        <Process />
        <Testimonial />
        <FAQ />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
