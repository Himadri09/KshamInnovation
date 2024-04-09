import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const handleShowNavbar = () => {
    setShowNav(!showNav);
  }

  return (
    <div className='NavBar'>
      <div className="NavLeft">
        <img className='logo' src='./images/Logo.png' alt='' />
      </div>
      <div className={`NavRight ${showNav && 'actNav'}`} >
        <Link className='pages' to={'/'} >Home</Link>
        <Link className='pages' to={'/About'} >About</Link>
        <Link className='pages' to={'/Contact'} >Contact Us</Link>
      </div>
      <button className="clickable" onClick={handleShowNavbar}>
        <img src='./images/lines3.png' alt="" className={`line3 ${showNav && 'disAble'}`} />
        <img src='./images/cross.png' alt="" className={`line3  ${!showNav && 'disAble'}`} />
      </button>
    </div>
  )
}