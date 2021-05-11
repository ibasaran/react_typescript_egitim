import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const BaseMenu = () => {
    const items = [
        {}
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" height="40" className="p-mr-2"></img>;
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
  