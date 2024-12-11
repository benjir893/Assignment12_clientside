import { createBrowserRouter, Outlet } from "react-router-dom";
import UsersLayout from "../Layout/UsersLayout";
import Home from "../GeneralPages/Home/Home";
import Department from "../GeneralPages/Department/Department";

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
           }
        ]
    }
])