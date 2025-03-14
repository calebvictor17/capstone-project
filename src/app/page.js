import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/hero'
import Matches from '../components/fixtures'
import Footer from '@/components/footer'
function Home() {
  return (
    <div><Navbar/>
    <HeroSection/>
    <Matches/>
    <Footer/>
    </div>
  )
}

export default Home
