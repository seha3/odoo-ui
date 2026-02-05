import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Awards from './components/FeaturesTimeline/FeaturesTimeline'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Divider from './components/Divider/Divider'
import CtaBanner from './components/CtaBanner/CtaBanner'
import AwardsGrid from './components/AwardsGrid/AwardsGrid'


function App() {

  return (
    <>
      <Navbar />
      <Divider />
      <Hero />
      <Awards />
      <CtaBanner />
      <AwardsGrid />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
