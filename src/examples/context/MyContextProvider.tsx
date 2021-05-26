import React from 'react';

interface MyContextProp {
    theme?: string,
    setTheme?: (value:string) => void
}


export const MyContext = React.createContext<MyContextProp>({});

export default class ThemeProvider extends React.Component {
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
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
  };