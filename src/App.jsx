import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Manifesto from './components/Manifesto'
import History from './components/History'
import Mission from './components/Mission'
import Gallery from './components/Gallery'
import Values from './components/Values'
import Join from './components/Join'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
      <a className="skip" href="#quem-somos">
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Manifesto />
        <History />
        <Mission />
        <Gallery />
        <Values />
        <Join />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
