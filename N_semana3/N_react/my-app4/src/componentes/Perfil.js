import React,{useState} from 'react';
import Button from './Button';
import Input from './Input';

function Perfil({def}){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='singUp-container'>
            <div className='input-container'>
                <Input
                    id="username"
                    label="Nombre:"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <Input
                    id="username"
                    label="Apellido:"
                    type="text"
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                />
                <Input
                    id="username"
                    label="Contraseña:"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <Button span="editar" def={def} />

            <div>
                <p>{name}</p>
                <p>{surname}</p>
                <p>{password}</p>
            </div>
        </div>
    )
}

export default Perfil;