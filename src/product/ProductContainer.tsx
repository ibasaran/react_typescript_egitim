import React,{useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import {RouteComponentProps} from 'react-router-dom';

interface ProductProp {
    id:number,
    title:string,
    description:string,
    price:number,
    imgUrl:string,
    categoryId:number
}

interface ProductContainerProps extends RouteComponentProps<{productId?:string}> {
    productId?:string
}

const ProductContainer:React.FC<ProductContainerProps> = (props) => {

    const [products, setProducts] = useState<ProductProp[]>();

    useEffect(() => {
       
        let url = 'http://localhost:3001/products';

        console.log(props);

        console.log(props.match.params.productId);

        if (props.match.params.productId) {
            url = 'http://localhost:3001/products?subcategoryId=' + props.match.params.productId;
        }


        axios.get(url, {}).then(response => {
            setProducts(response.data);
        });  
    },[]);

    const renderProduct = () => {
        let productList = products?.map( (product, index) => {
            return (
                <ProductCard key={index} 
                            id={product.id} 
                            title={product.title} price={product.price} 
                            imgUrl={product.imgUrl}
                            history={props.history}
                        />
            )
        });

        return productList;
    }

    return (
       <div className="p-grid">
            {renderProduct()}
       </div>
    )
}

export default ProductContainer;