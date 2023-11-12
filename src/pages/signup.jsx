import React from "react";
import "./css/auth.css";
import logoSm from "../assets/images/logo-sm.png";

const Signup = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="lg-inner">
          <div className="lg-head">
            <img src={logoSm} alt="small" />
            <span className="login-text">Log in</span>
            <span>
              Already a member? <a href="#"> Log In </a>
            </span>
          </div>

          <div className="alternative">
            <div className="other-login">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2826 19.9907V11.26H10.2785L10.848 7.63699H7.2827V5.28638C7.2827 4.29433 7.7817 3.32868 9.3781 3.32868H11V0.24493C11 0.24493 9.5282 0 8.1216 0C5.1854 0 3.26532 1.73569 3.26532 4.87582V7.63709H0V11.26H3.26532V20C4.6312 20 5.9168 19.9907 7.2826 19.9907Z" fill="#1977F3"/>
            </svg>
              <a href="#facebook" className="oauth-login">
                Continue with Facebook
              </a>
            </div>
            
            <div className="other-login">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 12.2271C21.6 11.518 21.5364 10.8362 21.4182 10.1816H12V14.0498H17.3818C17.15 15.2998 16.4455 16.3589 15.3864 17.068V19.5771H18.6182C20.5091 17.8362 21.6 15.2725 21.6 12.2271Z" fill="#4285F4"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 22.0004C14.6997 22.0004 16.9634 21.1049 18.6179 19.5777L15.3861 17.0686C14.4906 17.6686 13.3452 18.0231 11.9997 18.0231C9.39517 18.0231 7.19063 16.264 6.40426 13.9004H3.06335V16.4913C4.70881 19.7595 8.09063 22.0004 11.9997 22.0004Z" fill="#34A853"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.40455 13.8997C6.20455 13.2997 6.09091 12.6588 6.09091 11.9997C6.09091 11.3406 6.20455 10.6997 6.40455 10.0997V7.50879H3.06364C2.38636 8.85879 2 10.3861 2 11.9997C2 13.6133 2.38636 15.1406 3.06364 16.4906L6.40455 13.8997Z" fill="#FBBC05"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 5.97727C13.4679 5.97727 14.7861 6.48182 15.8224 7.47273L18.6906 4.60455C16.9588 2.99091 14.6952 2 11.9997 2C8.09063 2 4.70881 4.24091 3.06335 7.50909L6.40426 10.1C7.19063 7.73636 9.39517 5.97727 11.9997 5.97727Z" fill="#EA4335"/>
              </svg>
              <a href="#facebook" className="oauth-login">
                Continue with Google
              </a>
            </div>
            <div className="other-login">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0C1.39543 0 0.5 0.89543 0.5 2V3.19223L0.77854 3.30364L10.0358 7.0065C10.3338 7.1257 10.6662 7.1257 10.9642 7.0065L20.2215 3.30364L20.5 3.19223V2C20.5 0.89543 19.6046 0 18.5 0H2.5ZM20.5 4.80778L11.5213 8.3992C10.8657 8.6615 10.1343 8.6615 9.4787 8.3992L0.5 4.80778V14C0.5 15.1046 1.39543 16 2.5 16H18.5C19.6046 16 20.5 15.1046 20.5 14V4.80778Z" fill="#757575"/>
              </svg>
              <a href="#facebook" className="oauth-login">
                Continue with Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup