import { createBrowserRouter } from "react-router-dom";
import DisplayERROR from "../Components/Shared/DisplayERROR/DisplayERROR";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from './../Layout/Main';
import SignUp from './../Pages/SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <DisplayERROR></DisplayERROR>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
        ]

    }
])