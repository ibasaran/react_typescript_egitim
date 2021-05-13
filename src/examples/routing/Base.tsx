import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';


const Base:React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route path="/page2/:title" component={Page2} />
            </Switch>
        </Router>
    )
}

export default Base;