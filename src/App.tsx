import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import BaseMenu from './menu/BaseMenu';
import SideMenu from './sidemenu/SideMenu';
import ProductContainer from './product/ProductContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProductDetail from './product/ProductDetail';

import BaseRouter from './routers/BaseRouter';
import {BaseLayout, ProductLayout} from './layouts/Layouts';


class App extends React.Component {

  render() {
    return (
     <Router>
       <Switch>
          <BaseRouter exact path="/:productId" component={ProductContainer} layout={BaseLayout}/>
          <BaseRouter exact path="/detail/:productId" component={ProductDetail} layout={ProductLayout}/>
          <BaseRouter exact path="/" component={ProductContainer} layout={BaseLayout}/>
       </Switch>
     </Router>
    )
  }

}


export default App;
