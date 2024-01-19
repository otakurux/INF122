import React from "react";
import '../styles/Button.css';

function Button({ def, span }) {
    return (
        <div className="button-container">
            <button className="button" onClick={def}>{span}</button>
        </div>
    )
}

export default Button;