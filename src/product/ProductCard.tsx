import React, {useContext} from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {Link, RouteComponentProps} from 'react-router-dom';
import ProductContext from '../context/ProductContext';

interface ProdcutCardProps {
    id:number,
    title:string,
    price:number,
    imgUrl:string,
    history?: RouteComponentProps['history'],
    description?: string,
    subcategoryId:number
}


const ProductCard:React.FC<ProdcutCardProps> = ({id,title,price,imgUrl,description,subcategoryId,history}) => {

    const context = useContext(ProductContext);

    const header = (
        <img alt="Card" src={imgUrl} style={{height:180}}/>
    );

    const addProduct = () => {
        context?.addProduct(
            {
                id:id,
                title:title,
                description:description,
                subcategoryId:subcategoryId,
                price:price,
                imgUrl:imgUrl
            }
        )
    }

    const footer = (
        <span>
            <Button label="Sepete Ekle" icon="pi pi-check" onClick={addProduct}/>
            {/* <Link to={"/detail/" + id}> Detay </Link> */}
            <Button label="Detay" icon="pi pi-check" onClick={() => detayEktanaGit()}/>
        </span>
    );

    const detayEktanaGit = () => {
        history?.push("/detail/" + id);
    }

    return (
        <div className="p-col-3">
            <Card 
            title={title}
            subTitle={price}
            style={{ width: '15em' }} 
            footer={footer} 
            header={header}
        />
        </div>
        
    )
}

export default ProductCard;