import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {useState, useContext} from 'react';
import ProductContext from '../context/ProductContext';

const Login:React.FC = () => {

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(ProductContext);


    const loginFormSubmit = () => {
        context?.setLoggedIn(true);
        localStorage.setItem('loginToken', 'mytoken');
    }


    return (
        <div className="p-fluid">
            <div className="p-field">
                <label htmlFor="firstname1">Kullanıcı Adı</label>
                <InputText id="firstname1" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="p-field">
                <label htmlFor="lastname1">Şifre</label>
                <InputText id="lastname1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button onClick={loginFormSubmit}>Giriş</Button>
        </div>
        
    )

}

export default Login;