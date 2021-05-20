import { Menu } from 'primereact/menu';
import {Link} from 'react-router-dom';

const AdminLayout:React.FC = ({children}) => {

    const items = [
        {
            label:'Dashboard',
            template: () => {
                return (
                   <Link to="/admin">Dashboard</Link>
                )
            }
        },
        {
            label:'Product Add',
            template: () => {
                return (
                   <Link to="/admin/productadd">Product Add</Link>
                )
            }
        }
    ]


    return (
        <div className="p-grid">
            <div className="p-col-3">
                <Menu model={items} />
            </div>
            <div className="p-col-9">
                {children}
            </div>
        </div>
    )

}


export default AdminLayout;