import { createBrowserRouter, Outlet } from "react-router-dom";
import UsersLayout from "../Layout/UsersLayout";
import Home from "../GeneralPages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<UsersLayout></UsersLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])