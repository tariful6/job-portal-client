import { useContext } from "react";
import { Link, NavLink, } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(()=>{})
        .catch(err => {
            console.log(err);
        })
    }
    const navLinks = <>
       <li><NavLink to="/">Home</NavLink></li>
       {
        user ? <> 
            <li><NavLink to="/myApplication"> My Application</NavLink></li> 
            <li><NavLink to="/addJob"> Add Job</NavLink></li> 
            <li><NavLink to="/myPostedJob"> My Posted Job</NavLink></li> 
        </>: <></>
       }
       
       <li><NavLink to="/">Home</NavLink></li>
    </>
    return (
        <div className="bg-base-100 shadow-sm ">
            <div className="navbar container mx-auto px-0">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navLinks}
                </ul>
                </div>
                <Link to="/">
                   <span className="text-xl font-bold">JOB PORTAL </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                 {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className=" flex items-center">
                         <h2 className=" mr-2">{user?.email}</h2>
                         <button onClick={handleLogout} className="btn btn-secondary">logOut</button>
                    </div> : 
                    <Link to="/signIn">
                        <button className="btn">login</button>
                    </Link>
                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;