import React from 'react';
import Button from './Button';


const Input = ({ id, label, type, value, onChange, onDef }) => {
    // const onDef = () => {
    //     console.log("en el input");
    // }
    return (
        <div className='input-container'>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            />
            <Button onclick={onDef} span={"hola"}/>
        </div>
    );
}

export default Input;
