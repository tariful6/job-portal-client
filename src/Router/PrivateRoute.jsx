import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children
    }
    if(loading) {
        return <h2 className=" text-4xl text-red-300 text-center">Loading...</h2>
    }
    return <Navigate to='/signIn' state={location?.pathname}></Navigate>
};

export default PrivateRoute;