import React, { useContext } from 'react';
import useSeller from './../Hooks/useSeller';
import Loading from './../Components/Loading/Loading';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from './../Context/UserContext';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
export default SellerRoute;