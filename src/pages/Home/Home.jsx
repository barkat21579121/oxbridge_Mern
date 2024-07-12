import React from 'react'
import Navbar from '../../components/Navbar/NavBar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Products/>
    </div>
  )
}

export default Home
