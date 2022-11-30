import { createBrowserRouter } from "react-router-dom";
import DisplayERROR from "../Components/Shared/DisplayERROR/DisplayERROR";
import Android from "../Pages/Android/Android";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from './../Layout/Main';
import SignUp from './../Pages/SignUp/SignUp';
import AppleProducts from './../Pages/Apple/AppleProducts';

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
            {
                path : '/androids',
                element : <Android></Android>,
                loader : () => fetch('https://flip-phone-server-towhid7667.vercel.app/androids')
            },
            {
                path : '/appleproducts',
                element : <AppleProducts></AppleProducts>,
                loader : () => fetch('https://flip-phone-server-towhid7667.vercel.app/appleproducts')
            },
        ]

    }
])