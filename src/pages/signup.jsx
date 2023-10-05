import React from 'react'

const signup = () => {
  return (
    <div className="login-card">
      <span className="onCampus-logo">
        OnCampus
      </span>
      <span className="login">
        Sign in
      </span>
      <span className="signup-link">
        Already a member? <span className="link">Log in</span>
      </span>
      <div className="signup-link">
        <a href="#facebook" className="ouathLogin">Continue with Facebook</a>
        <a href="#facebook" className="ouathLogin">Continue with Google</a>
        <a href="#facebook" className="ouathLogin">Sign up with Email</a>
      </div>
    </div>
  )
}

export default signup