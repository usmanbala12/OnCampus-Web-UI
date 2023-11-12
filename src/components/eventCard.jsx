import React from 'react'
import cardImage from "../assets/images/ecimg.png"

const eventCard = () => {
  return (
   <div className="event-card">
    <img src={cardImage} alt="" className="ec-image" />
    <div className="ec-text">
        <div className="ec-main">
            <span className="time">
                SAT, SEP 9. 7:00 PM UTC
            </span>
            <span className="name">
                Building Industry Standard Cross-Platform Applications with flutter
            </span>
            <span className="host">
                Code Pyramid Nigeria, Kano.
            </span>
        </div>
        <div className="ec-sub">
            <span className="attendee-count">9 attendees</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8232 3.23741C6.9807 3.07992 7.25 3.19146 7.25 3.41419V12.25C7.25 12.6642 7.5858 13 8 13C8.4142 13 8.75 12.6642 8.75 12.25V3.41418C8.75 3.19146 9.0193 3.07992 9.1768 3.23741L11.9697 6.0303C12.2626 6.32319 12.7374 6.32319 13.0303 6.0303C13.3232 5.73741 13.3232 5.26253 13.0303 4.96964L9.2374 1.17675C8.554 0.49333 7.446 0.49333 6.7626 1.17675L2.96967 4.96964C2.67678 5.26253 2.67678 5.73741 2.96967 6.0303C3.26256 6.32319 3.73744 6.32319 4.03033 6.0303L6.8232 3.23741ZM5.25 8H2C0.89543 8 0 8.8954 0 10V18C0 19.1046 0.89543 20 2 20H14C15.1046 20 16 19.1046 16 18V10C16 8.8954 15.1046 8 14 8H10.75V9.5H14C14.2761 9.5 14.5 9.7239 14.5 10V18C14.5 18.2761 14.2761 18.5 14 18.5H2C1.72386 18.5 1.5 18.2761 1.5 18V10C1.5 9.7239 1.72386 9.5 2 9.5H5.25V8Z" fill="#707070"/>
            </svg>
        </div>
    </div>
    </div>
  )
}

export default eventCard