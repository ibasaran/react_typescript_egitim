import {Route, RouteProps, RouteComponentProps} from 'react-router-dom';

interface BaseRouteProps {
    layout: React.ElementType,
    component: React.ElementType,
    path: RouteProps['path'],
    exact?: RouteProps['exact']
}


const BaseRouter:React.FC<BaseRouteProps> = ({layout:Layout, component:Component, path, exact}) => {

    return (
        <Route 
        path={path}
        exact
        render={
            (props:RouteComponentProps) => {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            }
        }
        />
    )
}

export default BaseRouter;