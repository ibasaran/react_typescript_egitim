import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

interface ProdcutCardProps {
    title:string,
    price:number,
    imgUrl:string,
}


const ProductCard:React.FC<ProdcutCardProps> = ({title,price,imgUrl}) => {

    const header = (
        <img alt="Card" src={imgUrl} style={{height:180}}/>
    );
    const footer = (
        <span>
            <Button label="Sepete Ekle" icon="pi pi-check" />
        </span>
    );

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