import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials : true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        }, error => {
            console.log('error caught', error);
            if(error.status === 401 || error.status === 403 ){
                console.log('kick out the user');
                logOut()
                .then(()=>{
                    console.log('logged out user');
                    navigate('/signIn')
                })
                .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    },[logOut, navigate])
    return axiosInstance
};

export default useAxiosSecure;