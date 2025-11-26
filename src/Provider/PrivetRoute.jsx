import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/loading';

const PrivetRoute = ({children}) => {
    // if->user thake return children;
    const {user , loading} = use(AuthContext);
    // console.log('privet route user', user);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user.email){
        return children;
    }
    return <Navigate state={location.pathname}  to='/auth/login'></Navigate>
    
    // r na thale login page e niye jao
    
};

export default PrivetRoute;