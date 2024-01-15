import React from "react";
import "../N_Styles/Evento.css";

function EventoD({image, title, dateLiteral, placeLiteral, description, link, icon}) {
    return (
        <div className="card-container">

            <img className="card-image"
                src={image}
                alt="Foto del evento" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{dateLiteral}</p>
                <p className="card-place">{placeLiteral}</p>
                {description.map((line, index) => (<p className="card-description">{line}</p>))}
                {/* <p className="card-description">{description}</p> */}
            </div>
            <div className="links">
                <figure>
                    <a className="card-link" href={link}><img className="card-icon" src={icon} /></a>
                </figure>
                <figure>
                    <a className="card-link" href={link}><img className="card-icon" src={icon} /></a>
                </figure>
                <figure>
                    <a className="card-link" href={link}><img className="card-icon" src={icon} /></a>
                </figure>
            </div>
        </div>
    );
}

export default EventoD;