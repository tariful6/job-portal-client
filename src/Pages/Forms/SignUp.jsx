import Lottie from "lottie-react";
import signUpLottie from '../../assets/lottie/register.json'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();

        const handleSignUp = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            navigate('/')
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div className="hero bg-base-200 min-h-[80vh]">
            <div className="hero-content ">
                <div className=" w-full max-w-sm shadow-2xl p-6">
                    <form  onSubmit={handleSignUp} >
                        <div className=" mb-3">
                           <label className="label">Name</label>
                           <input name="name" type="text" className="input w-full" placeholder="name"  required/>
                        </div>
                        <div className=" mb-3">
                           <label className="label">Photo</label>
                           <input name="photo" type="text" className="input w-full" placeholder="photo url"  required/>
                        </div>
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
                    <div className="mt-2 "> <Link to='/signIn'>SignIn</Link></div>
                </div>
                <div className="text-center lg:text-left">
                    <Lottie animationData={signUpLottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default SignUp;