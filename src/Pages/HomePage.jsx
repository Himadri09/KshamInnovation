import React from 'react'
import '../Components/HomePage.css'
import HeroSection from '../Components/HeroSection'
import MainSec2 from '../Components/MainSec2'
import MainSec3 from '../Components/MainSec3'
import MainSec4 from '../Components/MainSec4'
import MainSec5 from '../Components/MainSec5'


export default function HomePage() {
  return (
    <div className='homePage'>
      <HeroSection/>
      <MainSec2/>
      <MainSec3/>
      <MainSec4/>
      <MainSec5/>
    </div>
  )
}