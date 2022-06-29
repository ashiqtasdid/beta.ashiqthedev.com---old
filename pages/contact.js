import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - Ashiq The Dev</title>
      </Head>
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default contact