import {useState, useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import axios from 'axios';
import { Button } from 'primereact/button';

interface ProductDetailProps extends RouteComponentProps<{productId?:string}> {
    productId?:string
}

interface Product {
    id:number,
    title:string,
    description:string,
    price:number,
    categoryId:number,
    imgUrl:string
}
 
const ProductDetail:React.FC<ProductDetailProps> = (props) => {

    const [product,setProduct] = useState<Product>();


    useEffect( () => {

        console.log('Detaile girdi');

        const productId = props.match.params.productId;

       

        axios.get('http://localhost:3001/products/' + productId, {}).then(response => {
            setProduct(response.data);
        });


    },[]);


    const consoleYaz = () => {
        console.log('Detaile girdi func');
    }


    return (
       
        <div className="p-grid">
             {consoleYaz()}
            <div className="p-col-6">
                <img src={product?.imgUrl} style={{height:300}}/>
            </div>
            <div className="p-col-6">
                <h1>{product?.title}</h1>
                <p>{product?.description}</p>
                <p><strong>{product?.price}</strong></p>
                <Button>Sepete Ekle</Button>
            </div>
        </div>
    )
}

export default ProductDetail;