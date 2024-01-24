import React from "react";
import Image from "./Image";
import '../style/Button.css';

const Button = ({ onclick, span, src, id }) => {
    return (
        <button className="button" onClick={onclick} id={id}>
            <div className="button-container">
                <p className="text">{span} <Image className={"image-button"} src={src} /></p>
            </div>
        </button>
    )
}

export default Button;