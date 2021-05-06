import React, {Fragment} from 'react';
import './App.css';


class App extends React.Component {

  state: {
    names:string[],
    name:string,
    surname: string
  } = {
    names: ['İsmail', 'Mustafa'],
    name: 'demo',
    surname: ''
  }


  add = () => {
    let newNames = [...this.state.names, this.state.name];
    this.setState({names:newNames, name:''});
  }

  render() {
    return (
      <Fragment>
        <ul style={{backgroundColor:''}}>
          {
            this.state.names.map((x,index) => {
              return <li key={'name' + index}>{x}</li>
            })
          }
        </ul>
        <input  value={this.state.name}  onChange={(e) => this.setState({name:e.target.value})}/>
        <button onClick={() => this.add()}>Ekle</button>
      </Fragment>
    )
  }

}


export default App;
