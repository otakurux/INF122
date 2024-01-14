import React from "react";
import MiImagen from '../N_Imagenes/logo.svg';

function ComponenteConImagen() {
  return (
    <div>
      <h1>Componente con Imagen</h1>
      <img src={MiImagen} alt="Descripción de la imagen" />
    </div>
  );
}

export default ComponenteConImagen;
