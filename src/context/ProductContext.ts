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
    addProduct: (product:ProductModel) => void,
    clearProducts: () => void,
    isLoggedIn:boolean,
    setLoggedIn: (value:boolean) => void,
}

const productContext = React.createContext<ProductContextProp | undefined>(undefined);

export default productContext;