import React from "react";
import Image from "./Image";
import IconLink from "./IconLink";
import "../style/Perfil.css";

import Icon1 from "../images/icon1.svg"
import Icon2 from "../images/icon2.svg"
import Icon3 from "../images/icon3.svg"
import Icon4 from "../images/icon4.svg"

const Perfil = ({fotoPerfil, name, cargo}) => {
    const generateIconLinks = () => {
        const icons = [
            { src: Icon1, href: "https://github.com/", target: "_blank", className: "icon" },
            { src: Icon2, href: "https://github.com/", target: "_blank", className: "icon" },
            { src: Icon3, href: "https://github.com/", target: "_blank", className: "icon" },
            { src: Icon4, href: "https://github.com/", target: "_blank", className: "icon" },
        ];

        return icons.map((icon, index) => (
            <IconLink
                key={index}
                src={icon.src}
                href={icon.href}
                target={icon.target}
                className={icon.className}
            />
        ));
    };
    return (
        <div class="perfil-container">
            <div class="foto-perfil">
                <Image src={fotoPerfil} className={"foto"} />
            </div>
            <div class="perfil-info">
                <h1 class="title">{name}</h1>
                <p class="subtitle">{cargo}</p>
                <div class="redes-sociales">
                    {generateIconLinks()}
                </div>
            </div>
        </div>
    )
}

export default Perfil;