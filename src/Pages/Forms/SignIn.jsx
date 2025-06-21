import Lottie from "lottie-react";
import loginLottie from '../../assets/lottie/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const SignIn = () => {
    const loaction = useLocation();
    const from = loaction.state || '/';
    const navigate = useNavigate();

    const {signInUser} = useContext(AuthContext)
    const handleSignIn = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(res => {
            // console.log(res.user.email)
            const user = {email : res.user.email};
            axios.post('http://localhost:5000/jwt', user, {withCredentials : true})
            .then(res => {
                console.log(res.data);
            })
            
            navigate(from)
         })
         .catch(err => {
            console.log(err);
         })
    
    }
    return (
        <div className="hero bg-base-200 min-h-[80vh]">
            <div className="hero-content ">
                <div className=" w-full max-w-sm shadow-2xl p-6">
                    <form  onSubmit={handleSignIn} >
                        <div className=" mb-3">
                           <label className="label">Email</label>
                           <input name="email" type="email" className="input w-full" placeholder="Email"  required/>
                        </div>
                        <div>
                           <label className="label">Password</label>
                           <input name="password" type="password" className="input w-full" placeholder="Password"  required/>
                        </div>
                        <div>
                           <input className="btn btn-neutral mt-4 w-full" type="submit" value="Signin" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="mt-2"> <Link to='/signUp'>Signup</Link></div>
                </div>
                <div className="text-center lg:text-left">
                    <Lottie animationData={loginLottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default SignIn;