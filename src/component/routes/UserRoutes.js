import React from "react";
import UserGuard from "./RouterGuard/UserGuard";
import Header from "../Layout/user/Header";

import { Outlet } from "react-router-dom";
import Login from "../pages/user/Login";
import RegisterUser from "../pages/user/RegisterUser";
import ChangePassword from "../pages/user/ChangePassword";
const UserRoutes ={
    path:'/',
    element :(

        <UserGuard>
            <Header/>
            <Outlet/>
        </UserGuard>
    ),
    children:[
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<RegisterUser/>
        },
        {
            path:'/changepassword',
            element:<ChangePassword/>
        },


    ]
};

export default UserRoutes;

