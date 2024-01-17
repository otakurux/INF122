import React from 'react';

function NotaNew({ text, edit, delet }) {
    return (
        <div className='note-container'>
            <div className='note-text'>
                <p>{text}</p>
            </div>
            <div className='note-buttons'>
                <button className='button' onClick={edit}><spam>Editar</spam></button>
                <button className='button' onClick={delet}><spam>Borrar</spam></button>
            </div>
        </div>
    );
}

export default NotaNew;
