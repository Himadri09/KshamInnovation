import React from 'react'
import './MainSec2.css'


export default function MainSec2() {
  return (
    <div className='MainSec2'>
        <h2 className='Sec2Heading'>Why Able Innovation Exists</h2>
        <div className="Sec2Data">
            <div className='Sec2VideoContainer'>
            <video controls autoPlay={true} loop={true} muted className='Sec2Image' src='./images/video1.mp4' ></video>
            </div>
            <div className="Sec2text">
                <ul>
                    <li className='sec2textline'>Globally, there are over 680 million people who are deaf, hard of hearing, mute, or blind.</li>
                    <li className='sec2textline'>India alone is home to more than 80 million individuals belonging to these diverse disability groups.</li>
                    <li className='sec2textline'>Sadly, an estimated 90% of these individuals lack access to education and often face poverty.</li>
                    <li className='sec2textline'>or these individuals, accessing essential information, education, and communication channels remains a significant challenge.</li>
                  
                </ul>
            </div>
        </div>
        
        <div className="Sec2Circle"></div>
    </div>
  )
}
