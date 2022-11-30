import React, { useContext } from 'react';
import { AuthContext } from './../Context/UserContext';
import useBuyer from './../Hooks/useBuyer';
import Loading from './../Components/Loading/Loading';
import { useLocation, Navigate } from 'react-router-dom';

const BuyerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loading></Loading>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;