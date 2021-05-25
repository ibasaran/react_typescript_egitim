import {withContext, MyContext} from './themeContext';
import React, {useContext} from 'react';

class Page1 extends React.Component {


    static contextType = MyContext;

    render() {
        console.log(this.context);
        console.log(this.props);
        return (
            <h1>{this.context.name}</h1>
        )
    }
}

export default withContext(Page1);