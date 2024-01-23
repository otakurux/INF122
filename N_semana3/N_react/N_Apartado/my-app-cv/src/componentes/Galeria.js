import React from "react";
import IconLink from "./IconLink";
import BussinessMan from "../images/bussiness_man.png"
import IssimaPage from "../images/issima_page.png"
import Kitchen from "../images/kitchen.jpeg"
import MobileApp from "../images/mobile_app.png"
import PicturesWall from "../images/pictures_wall.jpeg"
import "../style/Galeria.css"
const Galeria = () => {
    return (
        <div class="imagenes-container">
            <IconLink src={BussinessMan} className={"image-galeria"}/>
            <IconLink src={IssimaPage} className={"image-galeria"}/>
            <IconLink src={Kitchen} className={"image-galeria"}/>
            <IconLink src={MobileApp} className={"image-galeria"}/>
            <IconLink src={PicturesWall} className={"image-galeria"}/>
            <IconLink src={PicturesWall} className={"image-galeria"}/>
        </div>
    )
}

export default Galeria;