import MyContext from './MyContext';
import React, {useContext, useState} from 'react';

class Page2 extends React.Component {
    state = {
        newName:''
    }
    
    static contextType = MyContext;

    changeName = () => {
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

export default Page2;