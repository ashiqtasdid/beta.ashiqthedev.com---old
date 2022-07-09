import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/HeroNewsLetter/HeroNewsLetter'
import Temptweets from '../components/Temptweets/Temptweets'

const announcements = () => {
  return (
    <div>
      <Navbar />
      <div></div>
      <Temptweets/>
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default announcements