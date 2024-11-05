import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (

    <div className="main-container-navbar">
        <div className="logo-title">
            <Link to="/" style={{textDecoration:'none',color:'white'}}>Yelyuanne</Link>
        </div>
        <div className="directory-button">
            <Link to="/stories" style={{textDecoration:'none',color:'white'}}>Stories</Link>
        </div>
        <div className="directory-button">
        <Link to="/about" style={{textDecoration:'none',color:'white'}} >About</Link>
        </div>
        <div className="directory-button">
            <Link to="contacts" style={{textDecoration:'none',color:'white'}}>Contact</Link>
        </div>
    </div>

  )
}
