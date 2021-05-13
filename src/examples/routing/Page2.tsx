import {Link} from 'react-router-dom';
import {RouteComponentProps} from 'react-router-dom';

interface Page3Props extends RouteComponentProps<{title?:string}> {
    title?:string
}

const Page2:React.FC<Page3Props> = (props) => {
    return (
        <div>
            <h1>Merhaba Sayfa 2</h1>
            <p>{props.match.params.title}</p>
            <Link to="/"> Sayfa 1 </Link>
        </div>
    )
}

export default Page2;