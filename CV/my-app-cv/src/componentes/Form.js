import React from "react";
import Input from "./Input";

const Form = ({onDef}) => {
    return (
        <>
            <div className="form-container">
                <Input onDef={onDef}/>
                <Input onDef={onDef}/>
            </div>
        </>
    )
}

export default Form;