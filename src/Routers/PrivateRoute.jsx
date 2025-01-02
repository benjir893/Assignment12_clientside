import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) =>{
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-primary w-56" value="40" max="100"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};
export default PrivateRoute;