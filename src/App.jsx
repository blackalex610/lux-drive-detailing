import NavBar from './components/NavBar'
import Hero from './components/Hero'
import StatStrip from './components/StatStrip'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import LocationCTA from './components/LocationCTA'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'

export default function App() {
  return (
    <div className="font-body pb-20 md:pb-0">
      <NavBar />
      <Hero />
      <StatStrip />
      <Marquee />
      <Services />
      <Gallery />
      <Reviews />
      <LocationCTA />
      <Footer />
      <MobileCallBar />
    </div>
  )
}
