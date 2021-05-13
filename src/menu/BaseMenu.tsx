import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const BaseMenu = () => {
    const items = [
        {}
    ];

    const start = <i className="pi pi-amazon"><strong>  Mini Amazon</strong></i>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}


export default BaseMenu;
  