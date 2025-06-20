import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user.email])
    return (
        <div className=" container mx-auto">
            MyPostedJob - {jobs.length}
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Deadline</th>
                    <th>Application</th>
                    <th>Action</th>
              

                </tr>
                </thead>
                <tbody>
                {
                    jobs.map((job, index)=> <tr>
                    <th>{index+1}</th>
                    <td>{job.title}</td>
                    <td>{job.applicationDeadline}</td>
                    <td>{job.applicationCount ? job.applicationCount : 0}</td>
                    <td>
                        <Link to={`/viewApplication/${job._id}`}>
                           <button className=" btn btn-secondary">View</button>
                        </Link>
                    </td>
                </tr>)
                }

                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyPostedJob;