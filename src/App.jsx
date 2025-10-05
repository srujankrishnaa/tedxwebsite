import React from 'react'
import Navbar from './components/Navbar'
import EventHero from './components/EventHero'
import WhatIsTedx from './components/WhatIsTedx'
import Events from './components/Events'
import Talks from './components/Talks'
import Countdown from './components/Countdown'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EventHero />
      <WhatIsTedx />
      <Events />
      <Talks />
      <Countdown />
      <Footer />
    </div>
  )
}

export default App

