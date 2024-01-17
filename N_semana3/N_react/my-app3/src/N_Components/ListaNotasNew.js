import React from 'react';

import { useState } from 'react';
import NotaNew from './NotaNew';

function ListaNotasNew(){
    const [notas, setNotas] = useState([]);
    function agregarTarea(){
        var dato = document.getElementById("input");
        setNotas(
            notas.push(
                <NotaNew text={dato} />
            )
        )
    }

    // function mostrar(){

    // }

    return(
        <div className='lista-container'>
            <div>
                <input className= 'input' type='text'><samp>argregar tarea</samp></input>
            </div>
            <div>
                <button className='button' onClick={agregarTarea()}><spam>Agregar tarea</spam></button>
            </div>
            {/* <div>
                {notas}
            </div> */}
        </div>
    )
}