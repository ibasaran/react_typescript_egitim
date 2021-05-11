import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import axios from 'axios';

type CategoryType = {
    id:number,
    name:string
}

class SideMenu extends React.Component {
    state = {
        items:[
            {
                label:'Elektronik',
                icon:'pi pi-fw pi-file',
                command:()=>{ console.log('Tıklandı')}
            }
        ]
    }

    componentDidMount() {
        axios.get('http://localhost:3001/categories', {}).then(response => {

            const newItems = response.data.map((category:CategoryType, index:number) => {
                    return {
                        label:category.name,
                        icon:'pi pi-fw pi-file',
                    }
            });

            this.setState({
                items:newItems
            })

        });

       
    }

   render() {
    return (
        <div>
            <div className="card">
                <PanelMenu model={this.state.items} style={{ width: '22rem' }}/>
            </div>
        </div>
    );
   }
}

export default SideMenu;
   