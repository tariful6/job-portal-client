import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    // console.log(id);

    const handleApplyJob = (e)=> {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedin, github, resume, id);
        const jobApplication ={
            job_id : id,
            applicant_email : user?.email,
            linkedin,
            github,
            resume
        }
        fetch('http://localhost:5000/jobApplication', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("added successful")
                navigate('/myApplication')
            }
        })
    }
    
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Apply Now</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
                <form  onSubmit={handleApplyJob} >
                    <div className=" mb-3">
                       <label className="label">LinkedIn</label>
                       <input name="linkedin" type="url" className="input w-full" placeholder="linkedin"  required/>
                    </div>
                    <div>
                       <label className="label">Github</label>
                       <input name="github" type="url" className="input w-full" placeholder="github"  required/>
                    </div>
                    <div>
                       <label className="label">Resume</label>
                       <input name="resume" type="url" className="input w-full" placeholder="resume"  required/>
                    </div>
                    <div>
                       <input className="btn btn-neutral mt-4 w-full" type="submit" value="Apply now" />
                    </div>
                 </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default JobApply;