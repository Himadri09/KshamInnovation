import React from 'react'
import './MainSec4.css'


export default function MainSec4() {
  return (
    <div className='MainSec4'>
      <div className="sec4circle"></div>
      <h2 className='MainSec4Heading' >How Able Glasses Work</h2>
      <video controls autoPlay={true} loop={true} muted className='sec4vdo' src='./images/video2.mp4' alt=""></video>
    </div>
  )
}