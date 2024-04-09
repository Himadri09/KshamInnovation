import React from 'react'
import './MainSec3.css'
import Sec3Card from './Sec3Card'
import { Link } from 'react-router-dom'
// import AnimatedCard from './AnimatedCard'


export default function MainSec3() {
  return (
    <div className='MainSec3'>
        <div className="Sec3Left">
          <div className='Sec3Text1'>
        <p>Able glasses aims to provide smart aid glasses for Deaf, Mute and Blind.
        The open ear design makes able glasses a complete smart glasses device for everyone</p>
        </div>
          <div className='Sec3HeadContainer'>
            <div className='Sec3Head'>
                Our 
            </div>
            <div className='Sec3Head'>
            Innovation
            </div>
            </div>
            <div className="Sec3Text2"> 
                <p>The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize.</p>
            </div>
           </div>
       <Link to={'/About'}> <button className="Sec3btn">About Us</button></Link>

        <div className="Sec3Right">
          <div className="lCard">
              <Sec3Card
                imag='./images/ear.png'
                heading={"Glasses for Deaf & Hard of hearing"}
                point1={"Patented Dome Bone Conduction Transducer"}
                point2={"Arrays of Microphones, Bluetooth & Rechargeable "}
              />
              <div className="midSpace"></div>
              <Sec3Card
                imag='./images/hands.png'
                heading={"Glasses for Mute"}
                point1={"Real time sign language to audio conversion"}
                point2={"Pairs of side camera & speaker, Offline processing"}
              />
          </div>
          <div className="rCard">
              <div className="space1"></div>
              <Sec3Card
                imag='./images/eye.png'
                heading={"Glasses for Blind"}
                point1={"Objects & Face Recognition "}
                point2={"1080p front camera "}
              />
              <div className="midSpace"></div>
              <Sec3Card
                imag='./images/battery.png'
                heading={"Smart Case"}
                point1={"Day long battery backup "}
                point2={"Desktop computer mode."}
              />
          </div>
        </div>
    </div>
  )
}