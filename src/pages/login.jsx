import React from 'react'

const login = () => {
  return (
    <div className="login-card">
      <span className="onCampus-logo">
        OnCampus
      </span>
      <span className="login">
        Log in
      </span>
      <span className="signup-link">
        Not a member yet? <span className="link">Sign up</span>
      </span>
      <form className="login-form">
        <input type="text" />
        <input type="text" />
        <input type="checkbox" name="keepMeSignedIn" id="keepMeSignedIn" />
        <input type="submit" value="Log in" />
      </form>
      <a href="#facebook" className="ouathLogin">Log in with Facebook</a>
      <a href="#facebook" className="ouathLogin">Log in with Google</a>
    </div>
  )
}

export default login