import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/home/home";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";
import AllJob from "../Pages/AllJob/AllJob";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <Error></Error>,
    children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "signIn",
            element : <SignIn></SignIn>
        },
        {
            path : "signUp",
            element : <SignUp></SignUp>
        },
        {
            path : "jobs",
            element : <AllJob></AllJob>
        },
        {
            path : "addJob",
            element : <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path : "myPostedJob",
            element : <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
        },
        {
            path : "viewApplication/:job_id",
            element : <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
            loader : ({params})=> fetch (`http://localhost:5000/jobApplication/jobs/${params.job_id}`)
        },
        {
            path : "jobs/:id",
            element : <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path : "jobApply/:id",
            element : <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path : "/myApplication",
            element : <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
            // loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
    ]
  },
]);


export default myRouter;