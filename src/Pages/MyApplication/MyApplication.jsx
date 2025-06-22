import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplication = () => {
    const {user} = useAuth();
    const [jobs, setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();
 
    useEffect(()=>{
        // way no 1 -------------
        // fetch(`http://localhost:5000/jobApplication?email=${user.email}`)
        // .then(res => res.json())
        // .then(data => setJobs(data))
    

        // way no 2 -------------
        // axios.get(`http://localhost:5000/jobApplication?email=${user?.email}`, {withCredentials : true})
        // .then(res => setJobs(res.data))


        // way no 3 -------------
        axiosSecure.get(`jobApplication?email=${user?.email}`)
        .then(res => setJobs(res.data))

    },[user.email])
    console.log(jobs);
    
    return (
        <div className=" container mx-auto pt-9">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            #
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                   
                    {
                        jobs?.map((job, index) => <tr key={job._id}>
                            <th>
                            <label>
                                {index + 1}
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={job?.company_logo}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{job.title}</div>
                                <div className="text-sm opacity-50">{job.location}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                            <button className="btn btn-secondary">x</button>
                            </th>
                        </tr>
                    )}
                    </tbody>
                  
                </table>
                </div>
        </div>
    );
};

export default MyApplication;