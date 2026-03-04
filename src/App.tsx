import './index.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogosBar } from './components/LogosBar'
import { About } from './components/About'
import { Features } from './components/Features'
import { Process } from './components/Process'
import { CaseStudies } from './components/CaseStudies'
import { Articles } from './components/Articles'
import { Testimonial } from './components/Testimonial'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogosBar />
      <About />
      <Features />
      <Process />
      <CaseStudies />
      <Articles />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App

