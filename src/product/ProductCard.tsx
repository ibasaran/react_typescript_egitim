import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {Link, RouteComponentProps} from 'react-router-dom';

interface ProdcutCardProps {
    id:number,
    title:string,
    price:number,
    imgUrl:string,
    history?: RouteComponentProps['history']
}


const ProductCard:React.FC<ProdcutCardProps> = ({id,title,price,imgUrl,history}) => {

    const header = (
        <img alt="Card" src={imgUrl} style={{height:180}}/>
    );

    const footer = (
        <span>
            <Button label="Sepete Ekle" icon="pi pi-check" />
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