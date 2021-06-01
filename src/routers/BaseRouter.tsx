import {Route, RouteProps, RouteComponentProps, useHistory} from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import {useContext} from 'react';

interface BaseRouteProps {
    layout: React.ElementType,
    component: React.ElementType,
    path: RouteProps['path'],
    exact?: RouteProps['exact'],
    isAuth?: Boolean
}


const BaseRouter:React.FC<BaseRouteProps> = ({layout:Layout, component:Component, path, exact, isAuth}) => {
    
    let history = useHistory()
    const context = useContext(ProductContext);

    return (
        <Route 
        path={path}
        exact
        render={
            (props:RouteComponentProps) => {

                if(isAuth) {

                    if (context?.isLoggedIn) {
                        return (
                            <Layout>
                                <Component {...props} />
                            </Layout>
                           
                        )
                    }else {
                        history.push("/login");
                    }
                     
                }  else {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                       
                    )
                }

            }
        }
        />
    )
}

export default BaseRouter;