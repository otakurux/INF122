import React from "react";
import Card from "./Card";
import '../style/Info.css'

const Info = () => {
    return (
        <div class="info-container">
            <Card title={"7"} text={"Years of work experience"}/>
            <Card title={"50+"} text={"Completed projects"}/>
            <Card title={"20+"} text={"Satisfied customers"}/>
        </div>
    )
}

export default Info;