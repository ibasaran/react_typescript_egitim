import BaseMenu from '../menu/BaseMenu';
import SideMenu from '../sidemenu/SideMenu';


const BaseLayout:React.FC = ({children}) => {
    return (
        <div className="p-grid">
            <div className="p-col-12">
                <BaseMenu />
            </div>
            <div className="p-col-3">
                <SideMenu />
            </div>
            <div className="p-col-9">
                {children} 
            </div>
        </div>
    );
};

const ProductLayout:React.FC = ({children}) => {
    return (
        <div className="p-grid">
            <div className="p-col-12">
                <BaseMenu />
            </div>
            <div className="p-col-12">
                {children}
            </div>
        </div>
    );
};


export {BaseLayout, ProductLayout};

