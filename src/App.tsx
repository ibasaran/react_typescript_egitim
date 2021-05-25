import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import ProductContainer from './product/ProductContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProductDetail from './product/ProductDetail';

import BaseRouter from './routers/BaseRouter';
import {BaseLayout, ProductLayout} from './layouts/Layouts';

import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import ProductAdd from './admin/ProductAdd';

import ContextApp from './examples/context/ContextApp';

class App extends React.Component {

  render() {
    return (
    //  <Router>
    //    <Switch>

    //       <Route path="/admin/:path?" exact>
    //         <Switch>
    //             <AdminLayout>
    //               <Route path="/admin" exact component={AdminDashboard}/>
    //               <Route path="/admin/productadd" exact component={ProductAdd} />
    //             </AdminLayout>
    //         </Switch>
    //       </Route>

    //       <BaseRouter exact path="/:productId" component={ProductContainer} layout={BaseLayout}/>
    //       <BaseRouter exact path="/detail/:productId" component={ProductDetail} layout={ProductLayout}/>
    //       <BaseRouter exact path="/" component={ProductContainer} layout={BaseLayout}/>
    //    </Switch>
    //  </Router>
    <ContextApp />
    )
  }

}


export default App;
