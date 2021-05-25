import {withContext, MyContext} from './themeContext';
import React, {useContext, useState} from 'react';
import { render } from '@testing-library/react';

class Page2 extends React.Component {
    state = {
        newName:''
    }
    
    static contextType = MyContext;

    changeName = () => {
        console.log('Change name girdi');
        console.log(this.state.newName);
        this.context.setName(this.state.newName);
    }

   render() {
        return (
            <div>
                <input value={this.state.newName} onChange={(e) => this.setState({newName: e.target.value})} />
                <button onClick={() => this.changeName()}>İsmi Değiştir</button>
            </div>
        )
   }
}

export default withContext(Page2);