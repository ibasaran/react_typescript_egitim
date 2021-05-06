
import {Child} from './Child';
import {useState} from 'react';
import {Child2} from './Child2';
import {BaseCard} from './BaseCard';

const Parent = () => {

    const [mesaj,setMesaj] = useState('');


    const ConsolaYaz = () => {
        console.log('Parent Fonksiyonuyum.');
        setMesaj('Child Beni Cagirdi');
    }


    return (
        <>
            <Child  name="Ahmet" myfunc={setMesaj}  childComp = {<Child2 />}>

                <h1>Başlık</h1>
                <h2>Alt Başlık</h2>

            </Child>
            <br/>
            <p>{mesaj}</p>
            <br/>
            <BaseCard cardTitle="Limon">
                <p>Adet 2 TL</p>
            </BaseCard>
            <BaseCard cardTitle="Elma">
                <p>Kilogram 20 TL</p>
            </BaseCard>
            <BaseCard cardTitle="Muz">
                <p>Adet 2 TL</p>
            </BaseCard>
        </>
    )
}

export default Parent;