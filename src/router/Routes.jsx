import * as React from "react";

import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App/>
        ),
    },
    {
        path: "/carrito",
        element: <Cart/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/productos",
        element: <Products/>,
    },
    {
        path: "/registro",
        element: <Register/>,
    },
]);

