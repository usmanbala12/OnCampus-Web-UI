import React from 'react'
import frienship from "../assets/images/friends.png"
import "./css/styles.css";

const ArticleCard = () => {
  return (
    <div className="article-card">
        <img src={frienship} alt="article display" />
        <div className="acard-cont">
            <h3>Balancing the quality and quantity of Friendships</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo est cum id dolorem quia velit sunt provident doloremque asperiores quisquam.</p>
            <span className="acard-link">Read more</span>
        </div>
    </div>
  )
}

export default ArticleCard