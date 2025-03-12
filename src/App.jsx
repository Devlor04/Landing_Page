import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Header'
import MainContent from './Component/MainContent'
import Footer from './Component/Footer.jsx'
import SecurityCarousel from './Component/security-carousel.jsx'
import HowItWorks from './Component/HIWork.jsx'
import Mission from './Component/Mission.jsx'
import Protocol from './Component/Protocol.jsx'
import Ecosystem from './Component/Ecosystem.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <MainContent />
    <SecurityCarousel />
    <HowItWorks />
    <Mission />
    <Protocol />
    <Ecosystem />
    <Footer></Footer>
    </>
  )
}

export default App
