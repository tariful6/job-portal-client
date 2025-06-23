import Lottie from "lottie-react";

import addLottie from '../../assets/lottie/add.json'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries()); 
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const {min, max, currency, ...newJob} = initialData;
        // console.log(newJob);
        newJob.salaryRange = {min: parseInt(min), max:parseInt(max), currency}
        newJob.responsibilities = newJob.responsibilities.split('\n')
        newJob.requirements = newJob.requirements.split('\n')
        console.log(newJob);
        fetch('http://localhost:5000/jobs',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newJob)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            if(data.insertedId){
                alert('added successful');
                // navigate('/myPostedJob')
            }
        })
        
        
    }
    // https://i.ibb.co.com/j9KkckvP/Rectangle-16.png
    return (
        <div className="hero bg-base-200 min-h-[80vh]">
            <div className="hero-content ">
                <div className=" w-full max-w-2xl shadow-2xl p-6">
                    <form  onSubmit={handleAddJob} >
                        <div className=" flex gap-3">
                            <div className=" mb-3 w-1/2">
                               <label className="label">Job Title</label>
                               <input name="title" type="text" className="input w-full" placeholder="Job Title"  required/>
                            </div>
                            <div className=" w-1/2">
                               <label className="label">Job Location</label>
                               <input name="location" type="text" className="input w-full" placeholder="Job Location"  required/>
                            </div>
                        </div>
                        <div className=" flex gap-3">
                            <div className=" mb-3 w-1/2">
                               <label className="label mb-1">Job Type</label>
                               <select defaultValue="Pick One type" name="jobType" className=" select  w-full">
                                  <option  disabled>Pick One type</option>
                                  <option>Full time</option>
                                  <option>Intern</option>
                                  <option>Part-time</option>
                               </select>
                            </div>

                            <div className=" mb-3 w-1/2">
                               <label className="label mb-1">Job Field</label>
                               <select defaultValue="Pick One field" name="category" className=" select  w-full">
                                  <option  disabled>Pick One field</option>
                                  <option>Engineering</option>
                                  <option>Marketing</option>
                                  <option>Finance</option>
                                  <option>Teaching</option>
                               </select>
                            </div>
                        </div>
                        <div>
                            <label className="label mb-1">Salary Range</label>
                            <div className=" flex gap-3">
                                <div className=" mb-3 w-1/2">
                                <input name="min" type="number" className="input w-full" placeholder="Min"  required/>
                                </div>
                                <div className=" w-1/2">
                                <input name="max" type="number" className="input w-full" placeholder="Max"  required/>
                                </div>
                            </div>
                        </div>
                         <div className=" flex gap-3">
                            <div className=" mb-3 w-1/2">
                               <label className="label mb-1">Currency</label>
                               <select defaultValue="Pick OneCurrency" name="currency" className=" select  w-full">
                                  <option  disabled>Pick One Currency</option>
                                  <option>Bdt</option>
                                  <option>Usd</option>
                                  <option>Inr</option>
                               </select>
                            </div>
  
                            <div className=" w-1/2">
                               <label className="label mb-1">Company Name</label>
                               <input name="company" type="text" className="input w-full" placeholder="Company name"  required/>
                            </div>
                        </div>
                        <div className=" flex gap-3">
                            <div className=" mb-3 w-1/2">
                               <label className="label">Hr Name</label>
                               <input name="hr_name" type="text" className="input w-full" placeholder="Hr Name"  required/>
                            </div>
                            <div className=" w-1/2">
                               <label className="label">Hr Email</label>
                               <input readOnly defaultValue={user?.email} name="hr_email" type="email" className="input w-full" placeholder="Hr Email"  required/>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className=" mb-3 w-1/2">
                               <label className="label">Logo Url</label>
                               <input name="company_logo" type="text" className="input w-full" placeholder="Logo Url"  required/>
                            </div>
                            <div className=" mb-3 w-1/2">
                               <label className="label">Dateline</label>
                               <input name="applicationDeadline" type="date" className="input w-full" placeholder="dateline"  required/>
                            </div>
        
                        </div>

                         <div className="">
                            <label className="label mb-1">Requirement</label>
                            <textarea name="requirements" rows="3" className=" w-full resize-none border rounded-md p-4 " placeholder="Requirement" required></textarea>
                         </div>

                         <div className="">
                            <label className="label mb-1">Responsibilities</label>
                            <textarea name="responsibilities" rows="3" className=" w-full resize-none border rounded-md p-4" required></textarea>
                         </div>

                         <div className="">
                            <label className="label mb-1">Description</label>
                            <textarea name="description" rows="3" className=" w-full resize-none border rounded-md p-4" required></textarea>
                         </div>

                        <div>
                           <input className="btn btn-neutral mt-4 w-full" type="submit" value="Add Job" />
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <Lottie animationData={addLottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default AddJob;