import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <div className='Footer'>
      <div className='overlay'>
      <div className="foot1">
        <img src='./images/Logo2.png' alt="" className="fiiterLogo" />
        <div className="Privacypolicy">
        <a href="/">Privacy Policy</a>|
        <a href="/">Trademark</a>|
        <a href="/">Patent</a>
      </div>
        <p className="copyright">Copyright © Ksham Innovation 2023. All Rights Reserved.</p>
      </div>
    
      <div className="foot2">
        <div className='subfoot2'>
        <p className="socialText">
            Follow Us On
        </p>
        <a href="https://www.linkedin.com/company/ksham-innovation/?originalSubdomain=in" className="social"><img src='./images/linkedinlogo.png' alt="" /></a>
        <a href="https://www.instagram.com/ksham_innovation/" className="social"><img src='./images/instagramlogo.png' alt="" /></a>
        </div>

        <div className="subfoot">
            <div className="subfootcontent1">
            <img className='subfoot1image' src='./images/call.png' alt="" />
                <a href='tel:+91 9373124725' className="subfoot1">
                     Call Us&emsp;
                </a>|<a href="tel:+91 9373124725" className="subfoot1">&emsp;+91 9373124725</a>
            </div>
            <div className="subfootcontent2">
            <img className='subfoot2image' src='./images/mail.png' alt="" />
                <a href="mailto:kshaminnovation@gmail.com" className="subfoot2">
                    Email&emsp;
                </a>|<a href="mailto:kshaminnovation@gmail.com" className="subfoot2"> &emsp;kshaminnovation@gmail.com</a>
            </div>
        </div>


      </div>

    
      </div>
    </div>
  )
}


