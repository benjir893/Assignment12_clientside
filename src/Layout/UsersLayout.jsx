import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharedComponets/Footer/Footer";
import Navbar from "../SharedComponets/Navbar/Navbar";


const UsersLayout = () => {
    const location = useLocation();
    const noheaderfooter = location.pathname.includes('login') || location.pathname.includes('registration');

    return (
        <div>
            {noheaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderfooter || <Footer></Footer>}
        </div>
    );
};

export default UsersLayout;