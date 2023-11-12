import React from 'react'
import "./css/styles.css";

const footer = () => {
  return (
    <div className="footer">
        <div className="content">
        <div className="intro">
            <span className="ad">Create your own OnCampus account</span>
            <span className="gt-btn">Get Started</span>
        </div>
        <div className="links">
            <div className="personal">
                <span className="heading">Your Account</span>
                <span>sign in</span>
                <span>sing up</span>
                <span>help</span>
            </div>
            <div className="quickLinks">
                <span className="heading">Quick Links</span>
                <span>Groups</span>
                <span>Topics</span>
                <span>Calendar</span>
                <span>Online Events</span>
                <span>Blog</span>
            </div>
        </div>
        <div className="help-socials">
            <div className="help">
                <span className="cr">&copy; 2023 OnCampus</span>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <span>Help</span>
            </div>
            <div className="socials">
                <span>instagram</span>
                <span>twitter</span>
                <span>facebook</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default footer