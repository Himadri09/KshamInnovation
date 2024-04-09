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
                     Call Us
                </a>|<a href="tel:+91 9373124725" className="subfoot1">+91 9373124725</a>
            </div>
            <div className="subfootcontent2">
            <img className='subfoot2image' src='./images/mail.png' alt="" />
                <a href="mailto:kshaminnovation@gmail.com" className="subfoot2">
                    Email
                </a>|<a href="mailto:kshaminnovation@gmail.com" className="subfoot2"> kshaminnovation@gmail.com</a>
            </div>
            <div className="subfootcontent3">
            <img className='subfoot3image' src='./images/location.png' alt="" />
                <a href="https://www.google.com/maps/place/Naya+akola,+Maharashtra+444801/@21.0296074,77.6557493,12z/data=!3m1!4b1!4m6!3m5!1s0x3bd696073cacf6e7:0xd16985c8a3df6f91!8m2!3d21.044212!4d77.6307018!16s%2Fg%2F1hhvnd67g?entry=ttu" className="subfoot3">
                    Location
                </a>|<a href="https://www.google.com/maps/place/Naya+akola,+Maharashtra+444801/@21.0296074,77.6557493,12z/data=!3m1!4b1!4m6!3m5!1s0x3bd696073cacf6e7:0xd16985c8a3df6f91!8m2!3d21.044212!4d77.6307018!16s%2Fg%2F1hhvnd67g?entry=ttu" className="subfoot3">Naya akola, Maharashtra 444801 </a>
            </div>
        </div>


      </div>

    
      </div>
    </div>
  )
}


