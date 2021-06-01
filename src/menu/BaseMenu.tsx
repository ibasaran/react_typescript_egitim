import React, {useContext} from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import {Link} from 'react-router-dom';

import { Badge } from 'primereact/badge';
import ProductContext from '../context/ProductContext';

const BaseMenu:React.FC = (props) => {

    const context = useContext(ProductContext);

    const items = [
        {}
    ];

    const logout = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(context?.isLoggedIn);
        context?.setLoggedIn(false);
        console.log(context?.isLoggedIn);
        localStorage.setItem('loginToken', '');
        
    }

    const start = <i className="pi pi-amazon"><strong>  Mini Amazon</strong></i>;
    const end = ( <div>
            <Link to="/mycart" > Sepetim<Badge value={context?.products.length} ></Badge></Link>
            <Link  to="/admin">Administrator</Link>
            {context?.isLoggedIn ? <button onClick={e => logout(e)}>Çıkış</button>  : <Link  to="/login">Giriş</Link>}
            </div>)

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}


export default BaseMenu;
  