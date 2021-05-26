import Page1 from './Page1';
import Page2 from './Page2';
import MyContext from './MyContext';
import React, {useState} from 'react';



const ContextApp = () => {

    const [name,setName] = useState('');




    return (
        <MyContext.Provider value={{name,setName}}>
            <Page1 />
            <Page2 />
        </MyContext.Provider>
        
    )
}

export default ContextApp;