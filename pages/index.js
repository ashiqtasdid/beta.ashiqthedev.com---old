import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import Divider from '../components/Divider/Divider'
import Hero2 from '../components/Hero2/Hero2'
import Hero3 from '../components/Hero3/Hero3'
import HeroNewsLetter from '../components/HeroNewsLetter/HeroNewsLetter'
// import Pricing from '../components/Pricing/Pricing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ashiq The Dev - Developing That Matters</title>
      </Head>
      <Header />
      <Navbar />
      <Hero />
      <Divider />
      <Hero2 />
      <Divider />
      <Hero3 />
      <Divider/>
      <HeroNewsLetter/>
      {/* <Pricing/> */}
      <Footer />
    </div>
  )
}
