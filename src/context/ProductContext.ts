import React from 'react';

export interface ProductModel {
    id:number,
    title: string,
    description?: string,
    price: number,
    subcategoryId:number,
    imgUrl:string
}


export interface ProductContextProp {
    products: ProductModel[],
    addProduct: (product:ProductModel) => void
}

const productContext = React.createContext<ProductContextProp | undefined>(undefined);

export default productContext;