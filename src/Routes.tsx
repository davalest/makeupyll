import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [{
            path: "/contact",
            element: <Contact/>,
        }]
    }
]);
