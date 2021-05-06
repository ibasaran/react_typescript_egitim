import {useState} from 'react';

export const Child = () => {

    const [name,setName] = useState<string>('');
    const [names,setNames] = useState<string[]>(['İsmail','Mustafa']);

    const add = () => {
        setNames([...names,name]);
        setName('');
    }

    return (
        <div>
            <ul>
            {
                names.map( (x,index) => {
                    return (
                        <li key={index}>{x}</li>
                    )
                })
            }
            </ul>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={add}>Ekle</button>

        </div>
    )
}