import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleSignin} = useContext(AuthContext)
    const navigate = useNavigate();
        const handleGoogleLogin = ()=> {
        googleSignin()
        .then(res => {
            console.log(res.user);
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <div className=" divider">Or</div>
            <div className=" mx-auto mt-4 text-center">
                <button onClick={handleGoogleLogin} className=" btn btn-primary">Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;