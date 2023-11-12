import React from 'react'
import logo from "../assets/images/logo.png"

const TopBar = () => {
  
  return (
    <div className="topBar">
        <div className="logo-cont">
          <img src={logo} alt="logo" />
        </div>
        <div className="topBar-links">
          <span>Find Events</span>
          <span>Create Events</span>
          <span>Log In</span>
          <span className="signup-btn">Sign Up</span>
        </div>
    </div>
  )
}

export default TopBar