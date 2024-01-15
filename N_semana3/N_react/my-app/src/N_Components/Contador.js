import React from 'react';
import '../N_Styles/Contador.css';

function Contador({ nroClicks }) {
    return (
        <div className='contador'>
            {nroClicks}
        </div>
    );
}

export default Contador;