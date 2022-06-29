import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const about = () => {
  return (
    <div>
      <Head>
        <title>About Us - Ashiq The Dev</title>
      </Head>
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default about