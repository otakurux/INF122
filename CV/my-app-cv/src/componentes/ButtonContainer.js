import React from 'react';
import Button from './Button';
import descarga from "../images/icon5.svg";
import "../style/ButtonContainer.css";

const Button_Container = () => {
    return (
        <div className='buttons-primari'>
            <div className='buttons'>
                <Button src={descarga} span={"Download CV"} id={"button-one"} />
                <Button span={"Contact me"} id={"button-two"} />
            </div>
        </div>
    )
}

export default Button_Container;