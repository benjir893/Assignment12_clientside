import { createBrowserRouter, Outlet } from "react-router-dom";
import UsersLayout from "../Layout/UsersLayout";
import Home from "../GeneralPages/Home/Home";
import Department from "../GeneralPages/Department/Department";
import Login from "../GeneralPages/Login/Login";
import Registration from "../GeneralPages/Registration/Registration";
import MakeAppointment from "../GeneralPages/MakeAppointment/MakeAppointment";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<UsersLayout></UsersLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           {
            path:"department",
            element:<Department></Department>
           },
           {
            path:'login',
            element:<Login></Login>
           },
           {
            path:'registration',
            element:<Registration></Registration>
           },
           {
             path:'makeappointment/:department',
             element:<PrivateRoute><MakeAppointment></MakeAppointment></PrivateRoute>
           }
        ]
    }
])