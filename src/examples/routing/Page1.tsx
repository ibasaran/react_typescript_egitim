import {Link} from 'react-router-dom';

const Page1:React.FC = (props) => {


    const renderProp = () => {
        console.log(props)
    }

    return (
        <div>
            {renderProp()}
            <h1>Merhaba Sayfa 1</h1>
            <Link to="/page2/deneme"> Sayfa 2 </Link>
        </div>
    )
}

export default Page1;