import { createBrowserRouter } from "react-router-dom";
import DisplayERROR from "../Components/Shared/DisplayERROR/DisplayERROR";
import Home from "../Pages/Home/Home";
import Main from './../Layout/Main';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <DisplayERROR></DisplayERROR>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]

    }
])