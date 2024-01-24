import React from 'react';
// import '../N_Styles/Cuadro.css';

function Cuadro({ valor, funcion }) {
    return (
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}

export default Cuadro;