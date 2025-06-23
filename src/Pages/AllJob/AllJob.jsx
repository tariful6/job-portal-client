import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import JobsCart from "../home/HotJobs/JobsCart";

const AllJob = () => {
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState('');
    const {jobs, loading} = useJobs(sort, search, minSalary, maxSalary);

    if(loading){
        return <h2 className=" text-center text-2xl text-red-500">Job is Loading</h2>
    }
    return (
        <div className=" container mx-auto">   
             <h2 className=" text-3xl text-center font-bold my-3">All Jobs</h2>
             <div className="bg-base-200 py-5 p-3 flex gap-4 items-center my-3">
                 <button onClick={()=> setSort(!sort)} className={` btn btn-neutral ${sort && 'btn-success text-white'}`}>{ sort == true? 'Sorted by salary' : 'Sort by salary'}</button>
                 <input onKeyUp={(e)=> setSearch(e.target.value)} className=" input w-full max-w-2xl" type="text" name="" placeholder="Search" />
                 <input onKeyUp={(e)=> setMinSalary(e.target.value)} className=" input w-full max-w-sm" type="number" name="" placeholder="minimum salary" />
                 <input onKeyUp={(e)=> setMaxSalary(e.target.value)} className=" input w-full max-w-sm" type="number" name="" placeholder="maximum salary" />
              </div>
             <div className=" container mx-auto  grid grid-cols-3 gap-6 py-9">
                {jobs.map((job) => (
                    <JobsCart key={job._id} job={job}></JobsCart>
                ))}
            </div>    
        </div>
    );
};

export default AllJob;