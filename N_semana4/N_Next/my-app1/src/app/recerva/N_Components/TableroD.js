import React from 'react';
// import '../N_Styles/Tablero.css';
import CuadroB from './CuadroB';

function TableroD({ cuadros, onClick }) {
    function renderizarCuadros() {
        const cuadrosRenderizados = [];

        for (let i = 0; i < 9; i++) {
            cuadrosRenderizados.push(
                <CuadroB
                    key={i}
                    valor={cuadros[i]}
                    funcion={() => onClick(i)}
                />
            );
        }
        return cuadrosRenderizados;
    }

    return (
        <div>
            <div className="tablero">
                {renderizarCuadros()}
            </div>
        </div>
    );

}
export default TableroD;