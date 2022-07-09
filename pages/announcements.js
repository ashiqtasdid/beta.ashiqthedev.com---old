import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/HeroNewsLetter/HeroNewsLetter'
import Temptweets from '../components/Temptweets/Temptweets'
import Header from '../components/Header/Header'
import Head from 'next/head'

const announcements = () => {
  return (
    <div>
      <Header/>
      <Head>
        <title>Announcements - Ashiq The Dev</title>
      </Head>
      <Navbar />
      <div></div>
      <Temptweets/>
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default announcements