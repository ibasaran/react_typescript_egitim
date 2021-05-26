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
import ProductContext, {ProductContextProp, ProductModel} from './context/ProductContext';
import Cart from './cart/Cart';

class App extends React.Component {

  addProduct = (product:ProductModel) => {
    let newProductList = [...this.state.products] ;
    newProductList.push(product);
    this.setState({...this.state, products:newProductList });
  }

  state:ProductContextProp = {
    products: [],
    addProduct: this.addProduct
  }

  render() {
    return (
     <ProductContext.Provider value={this.state}>
       <Router>
        <Switch>

            <Route path="/admin/:path?" exact>
              <Switch>
                  <AdminLayout>
                    <Route path="/admin" exact component={AdminDashboard}/>
                    <Route path="/admin/productadd" exact component={ProductAdd} />
                  </AdminLayout>
              </Switch>
            </Route>

            <BaseRouter exact path="/:productId" component={ProductContainer} layout={BaseLayout}/>
            <BaseRouter exact path="/detail/:productId" component={ProductDetail} layout={ProductLayout}/>
            <BaseRouter exact path="/mycart" component={Cart} layout={ProductLayout}/>
            <BaseRouter exact path="/" component={ProductContainer} layout={BaseLayout}/>
        </Switch>
      </Router>
     </ProductContext.Provider>
    // <ContextApp />
    )
  }

}


export default App;
