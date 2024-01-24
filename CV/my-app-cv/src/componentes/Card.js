import React from "react";
import "../style/Card.css"

const Card = ({ title, text }) => {
    return (
        <div class="card-container">
            <p className="text">{title}</p>
            <div class="card-description">
                <p class="text">{text}</p>
            </div>
        </div>
    )
}

export default Card;