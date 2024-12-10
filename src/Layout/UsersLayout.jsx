import { Outlet } from "react-router-dom";
import Footer from "../SharedComponets/Footer/Footer";
import Navbar from "../SharedComponets/Navbar/Navbar";


const UsersLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default UsersLayout;