import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

function Login({ def }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='login-container'>
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
                    label="Contraseña:"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <Button span="login" def={def} />
            
            <div>
                <p>{name}</p>
                <p>{password}</p>
            </div>
        </div>
    )
}

export default Login;