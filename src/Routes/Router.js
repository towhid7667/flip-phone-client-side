import { createBrowserRouter } from "react-router-dom";
import DisplayERROR from "../Components/Shared/DisplayERROR/DisplayERROR";
import Android from "../Pages/Android/Android";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from './../Layout/Main';
import SignUp from './../Pages/SignUp/SignUp';
import AppleProducts from './../Pages/Apple/AppleProducts';
import GamingPhones from './../Pages/GamingPhones/GamingPhones';
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from './PrivateRoute';
import AdminRoute from "./AdminRoute";
import AllUsers from './../Pages/Dashboard/Allusers';
import SellerRoute from './SellerRoute';
import UploadItem from './../Pages/Dashboard/UploadItem';
import ProductsDetails from "../Pages/ProductDetails/ProductsDetails";

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
            {
                path : '/gamingphones',
                element : <GamingPhones></GamingPhones>,
                loader : () => fetch('https://flip-phone-server-towhid7667.vercel.app/gamingphones')
            },
            {
                path : '/productdetails/:id',
                element : <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
                loader : ({params}) => fetch(`https://flip-phone-server-towhid7667.vercel.app/allproducts/${params.id}`)
            },
        ]

    },
    {
        path: '/dashboard',
        element : <DashboardLayout></DashboardLayout>,
        errorElement:<PrivateRoute><DisplayERROR></DisplayERROR></PrivateRoute>,
        children: [
            {
                path : '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path : '/dashboard/uploadItem',
                element: <SellerRoute><UploadItem></UploadItem></SellerRoute>
            },

        ]
    }
])