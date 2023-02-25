import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../Layout/Main";
import Category from "../Category/Category";

export const router =createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/categories',
                element:<Category></Category>
            }
        ]
    }
])