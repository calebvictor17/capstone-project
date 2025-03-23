import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/hero'
import Matches from '../components/fixtures'
import About from '@/components/about'
import LatestNews from '@/components/blog'
function Home() {
  return (
    <div><Navbar/>
    <HeroSection/>
    <Matches/>
    <About/>
    <LatestNews/>
    
    
    </div>
  )
}

export default Home
