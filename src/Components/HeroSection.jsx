import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className='heroSection'>
      <div className='heroHeadingContainer'>
        <h1 className='heroHeading'>
            World's 1st
            Smart Aid
            Glasses for
        </h1>
        </div>
        <div className='heroSubHeading'>
            <h2>Deaf</h2> <div className='Dot'></div>
            <h2>Mute</h2> <div className='Dot'></div>
            <h2>Blind</h2>
        </div> 
        <div className="circleHero">
        <div className='Framebox'></div>
        <div className='bestlens'>BEST LENSES</div>
        <div className='glassImageContainer'><img className='glassImage' src='./images/glass5.png' alt="" /></div> 
        </div>
        <Link to={'/Contact'} ><button className='heroButton'>Get Early Access</button></Link>
    </div>
  )
}