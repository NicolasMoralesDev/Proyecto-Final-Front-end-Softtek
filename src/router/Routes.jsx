import * as React from "react";

import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Error from "../Pages/Error";


export const router = createBrowserRouter([

    {
        path: "*",
        element: (
            <Error/>
        ),
    },
    {
        path: "/",
        element: (
            <App/>
        ),    
        errorElement: <Error/>,
    },
    {
        path: "/carrito",
        element: <Cart/>,
        errorElement: <Error/>,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <Error/>,
    },
    {
        path: "/productos",
        element: <Products/>,
        errorElement: <Error/>,
    },
    {
        path: "/registro",
        element: <Register/>,
        errorElement: <Error/>,
    },
]);

