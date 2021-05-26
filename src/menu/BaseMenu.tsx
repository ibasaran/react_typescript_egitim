import React, {useContext} from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import {Link} from 'react-router-dom';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import ProductContext from '../context/ProductContext';

const BaseMenu = () => {

    const context = useContext(ProductContext);

    const items = [
        {}
    ];

    const start = <i className="pi pi-amazon"><strong>  Mini Amazon</strong></i>;
    const end = ( <div>
            <Button type="button" label="Sepetim" className="p-mr-2"><Badge value={context?.products.length} ></Badge></Button>
            <Link  to="/admin">Administrator</Link>
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
  