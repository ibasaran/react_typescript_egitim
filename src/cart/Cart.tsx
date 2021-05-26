import { DataScroller } from 'primereact/datascroller';
import ProductContext, {ProductModel} from '../context/ProductContext';
import {useContext} from 'react';

const Cart = () => {

    const context = useContext(ProductContext);

    const  itemTemplate = (data:ProductModel) => {
        return (
            <div className="product-item">
                <img src={data.imgUrl} style={{height:50}}/>
                <div className="product-detail">
                    <div className="product-name">{data.title}</div>
                    <div className="product-description">{data.description}</div>
                </div>
                <div className="product-action">
                    <span className="product-price">${data.price}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
             <DataScroller value={context!.products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
        </div>
    )
}

export default Cart;