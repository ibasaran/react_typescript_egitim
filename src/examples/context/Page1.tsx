import MyContext from './MyContext';
import React, {useContext} from 'react';

// class Page1 extends React.Component {


//     static contextType = MyContext;

//     render() {
//         return (
//             <h1>Page 1 - {this.context.name}</h1>
//         )
//     }
// }


const Page1 = () => {

    const context = useContext(MyContext);

    return (
        <h1>Page 1 - {context.name}</h1>
    )    
}


export default Page1;