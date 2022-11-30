import React, { useContext } from 'react';
import { AuthContext } from './../Context/UserContext';
import useAdmin from './../Hooks/useAdmin';
import { useLocation, Navigate } from 'react-router-dom';
import Loading from './../Components/Loading/Loading';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;