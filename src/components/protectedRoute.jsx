// import { LoginPage } from "../pages/auth/Login";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props)=>{
    const {children} = props;

    const isLogin = false;
    return isLogin? children : < Navigate to ="/login"/> 
}