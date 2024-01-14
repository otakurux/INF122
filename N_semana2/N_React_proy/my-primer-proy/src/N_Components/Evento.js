import React from "react";
import "../N_Styles/Evento.css";
import MiImagen from '../N_Imagenes/logoGithup.svg';

function Evento() {
  return (
    <div className="card-container">

      <img className="card-image"
        src={require("../N_Imagenes/img1.jpg")}
        alt="Foto del evento" />
      <div className="card-info">
        <div className="card-content">
          <div className="card-content-t-i">
            <h2 className="card-title">Py Pizza 03 - PyPuzzle</h2>
            <a className="card-link"><spam>proximamente</spam></a>
            {/* <button className="card-input">
              <span>proximamente</span>
            </button> */}
          </div>
          <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
          <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
          <p className="card-description">¡Hola Pythonista!
            Participa en este Evento Presencial de la comunidad Python La Paz
            ¿Cuánto conoces de Python?
            Aprende a trabajar en equipo resolviendo increíbles acertijo
            ¡Anímate a ser parte de esta actividad!</p>
        </div>

        <div className="card-enlaces">
          <figure>
            <img className="card-icons" src={MiImagen} alt="Descripción de la imagen" />
          </figure>
          <figure>
            <img className="card-icons" src={MiImagen} alt="Descripción de la imagen" />
          </figure>
          <figure>
            <img className="card-icons" src={MiImagen} alt="Descripción de la imagen" />
          </figure>
          <figure>
            <img className="card-icons" src={MiImagen} alt="Descripción de la imagen" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Evento;