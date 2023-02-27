import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../Layout/Main";
import Category from "../Category/Category";
import Restaurant from "../SingleCategory/Restaurant";
import Cart from "../SingleCategory/Cart";
import Checkout from './../SingleCategory/Checkout';

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
            },
            {
                path:'/restuarant',
                element:<Restaurant></Restaurant>
            },
            {
                path:'/addToCart',
                element:<Cart></Cart>
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            },
        ]
    }
])