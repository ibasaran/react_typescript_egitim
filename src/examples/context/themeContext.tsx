import React, {useState} from 'react';

interface MyContextProp {
    name?: string,
    setName?: (name:string) => void
}


export const MyContext = React.createContext<MyContextProp>({});


// export const withContext = (WrappedComponent: React.ElementType): React.ElementType => {

//     // const [name,setName] = useState('ali');


//     return class MyContextHoc extends React.Component {
        
//         setName = (value:string) => {
//             console.log('HOC set name cagrildi', value);
//             this.setState({name:value});
//         }


//         state:MyContextProp = {
//             name: 'Ali ',
//             setName: this.setName

//         }

//         render() {
//             return (
//                 <MyContext.Provider value={this.state}>
//                     <WrappedComponent {...this.props}/>
//                 </MyContext.Provider>
//             )
//         }
//     }

// }



export const withContext = function<P>(WrappedComponent: typeof React.Component) {
    
    return class MyContextHoc extends React.Component<P, any> {
        
                setName = (value:string) => {
                    console.log('HOC set name cagrildi', value);
                    this.setState({name:value});
                }
        
        
                state:MyContextProp = {
                    name: 'Ali ',
                    setName: this.setName
        
                }
        
                render() {
                    return (
                        <MyContext.Provider value={this.state}>
                            <WrappedComponent {...this.props}/>
                        </MyContext.Provider>
                    )
                }
            }
}
