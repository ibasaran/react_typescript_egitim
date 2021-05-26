import React, {useState} from 'react';
import ThemeProvider from './MyContextProvider';

interface MyContextProp {
    theme?: string,
    setTheme?: (value:string) => void
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
        
                setTheme = (value:string) => {
                    console.log('HOC set name cagrildi', value);
                    this.setState({theme:value});
                }
        
        
                state:MyContextProp = {
                    theme: 'Ali ',
                    setTheme: this.setTheme
        
                }
        
                render() {
                    return (
                        <ThemeProvider>
                            <WrappedComponent {...this.props} />
                            
                        </ThemeProvider>
                    )
                }
            }
}
