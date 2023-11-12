import React from 'react'
import GroupImage from "../assets/images/gcimg.png"
import "./css/styles.css"

const GroupCard = () => {
  return (
    <div className="group-card">
    <img src={GroupImage} alt="" className="gc-img" />
    <div className="gc-text">
        <div className="gc-header">
            <span>
                BUK Business Club
            </span>
            <span>
                KANO, NG
            </span>
        </div>
        <span className="gc-desc">Welcome to Polkadot and Kusama, Kano! This is a community for both technical and non-technical people to learn about, discuss,…</span>

        <div className="gc-sub">
            <span className="member-count">565 members . Public</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.16329 2.82741C7.32079 2.66992 7.59009 2.78146 7.59009 3.00419V11.84C7.59009 12.2542 7.92589 12.59 8.34009 12.59C8.75429 12.59 9.09009 12.2542 9.09009 11.84V3.00418C9.09009 2.78146 9.35939 2.66992 9.51689 2.82741L12.3098 5.6203C12.6027 5.91319 13.0775 5.91319 13.3704 5.6203C13.6633 5.32741 13.6633 4.85253 13.3704 4.55964L9.57749 0.766746C8.89409 0.0833259 7.78609 0.0833259 7.10269 0.766746L3.30976 4.55964C3.01687 4.85253 3.01687 5.32741 3.30976 5.6203C3.60265 5.91319 4.07753 5.91319 4.37042 5.6203L7.16329 2.82741ZM5.59009 7.59H2.34009C1.23552 7.59 0.340088 8.4854 0.340088 9.59V17.59C0.340088 18.6946 1.23552 19.59 2.34009 19.59H14.3401C15.4447 19.59 16.3401 18.6946 16.3401 17.59V9.59C16.3401 8.4854 15.4447 7.59 14.3401 7.59H11.0901V9.09H14.3401C14.6162 9.09 14.8401 9.3139 14.8401 9.59V17.59C14.8401 17.8661 14.6162 18.09 14.3401 18.09H2.34009C2.06395 18.09 1.84009 17.8661 1.84009 17.59V9.59C1.84009 9.3139 2.06395 9.09 2.34009 9.09H5.59009V7.59Z" fill="#707070"/>
            </svg>
        </div>
    </div>
    </div>
  )
}

export default GroupCard