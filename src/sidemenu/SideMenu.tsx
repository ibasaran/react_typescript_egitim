import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import axios from 'axios';

interface SubCategoryType {
    id:number,
    name:string,
    categoryId:number
}

interface CategoryType {
    id: number,
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


    getSubCategories =  (category:CategoryType) => {
        return new Promise( async (resolve, reject) => {
            const subCatResponse = await axios.get('http://localhost:3001/categories/'+category.id+'/subcategories',{});
            const subItems = subCatResponse.data.map((subcategory:SubCategoryType) => {
                return {
                    label:subcategory.name,
                    icon:'pi pi-fw pi-file'
                }
            });

            let categoryItem = {
                label: category.name,
                icon:'pi pi-fw pi-file',
                items:subItems
            }

            resolve(categoryItem);
        });
    }



    async componentDidMount() {

        //const response = await axios.get('http://localhost:3001/categories', {});

        axios.get('http://localhost:3001/categories', {}).then( async response => {

        //     let newItems = [];
        //     for(const category of response.data) {
        //         const subCatResponse = await axios.get('http://localhost:3001/categories/'+category.id+'/subcategories',{});
                
        //         const subItems = subCatResponse.data.map((subcategory:SubCategoryType) => {
        //             return {
        //                 label:subcategory.name,
        //                 icon:'pi pi-fw pi-file'
        //             }
        //         });

        //         let categoryItem = {
        //             label: category.name,
        //             icon:'pi pi-fw pi-file',
        //             items:subItems
        //         }

        //         newItems.push(categoryItem);
        //     }

        //     this.setState({items:newItems});


            Promise.all(response.data.map(this.getSubCategories)).then( response => {
                console.log(response);
                this.setState({items:response});
            });

        }).catch( err => {console.log(err)});

       
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
   