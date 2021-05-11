import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import BaseMenu from './menu/BaseMenu';
import SideMenu from './sidemenu/SideMenu';




class App extends React.Component {

  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <BaseMenu />
        </div>
        <div className="p-col-3">
          <SideMenu />
        </div>
        <div className="p-col-9">9</div>
      </div>
    )
  }

}


export default App;
