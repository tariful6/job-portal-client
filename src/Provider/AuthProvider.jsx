import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";


const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing current user', currentUser);
            if(currentUser?.email){
                const user = {email : currentUser.email}
                axios.post('http://localhost:5000/jwt', user, {withCredentials : true})
                .then(res =>  {
                    console.log('login token',res.data)
                    setLoading(false)
                })
            }
            else{
                axios.post('http://localhost:5000/logout', {}, {withCredentials : true})
                .then(res =>  {
                    console.log('logout', res.data)
                    setLoading(false)
                })
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])



    const authInfo ={user, loading, createUser, logOut, signInUser, googleSignin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;