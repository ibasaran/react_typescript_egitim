import {InputText} from 'primereact/inputtext';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

interface SubCategoryType {
    id:number,
    name:string,
    categoryId:number
}

const ProductAdd:React.FC = () => {

    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState(1);
    const [imgUrl, setImgUrl] = useState('');
    const [subcategoryList, setSubcategoryList] = useState<SubCategoryType[]>([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/subcategories',{}).then(response => {
            setSubcategoryList(response.data);
        });
    }, []);

    const submitForm = () => {
        setLoading(true);
        axios.post('http://localhost:3001/products', {
            title: title,
            description: description,
            price: price,
            subcategoryId: category,
            imgUrl: imgUrl
        }).then(response => {
            console.log('ProuctAdd Form Submit ', response);
            setLoading(false);
            setTitle('');
            setDescription('');
            setCategory(0);
            setImgUrl('');
            setPrice('');
        });
    }


    return (
        <div>
             <h5>Ürün Ekleme Formu</h5>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="title">Title</label>
                        <InputText id="title" type="text" value={title} onChange={ e => setTitle(e.target.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="desc">Description</label>
                        <InputText id="desc" type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="price">Price</label>
                        <InputText id="price" type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="imgUrl">Image Url</label>
                        <InputText id="imgUrl" type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="firstname6">Kategorisi </label>
                        <select onChange={e => setCategory(parseInt(e.target.value))} value={category}>
                            {
                                subcategoryList.map(((subcat,index) => {
                                    return <option key={index} value={subcat.id}>{subcat.name}</option>
                                }))
                            }
                        </select>
                    </div>

                    
                    <Button onClick={submitForm}>
                        Kaydet
                    </Button>

                    {loading ? <ProgressSpinner/> : null}
                    
                </div>
        </div>
    )
}


export default ProductAdd;