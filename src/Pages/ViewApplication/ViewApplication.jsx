import { useLoaderData } from "react-router-dom";


const ViewApplication = () => {
    const applicationData = useLoaderData();
    console.log(applicationData);

    const handleStatusUpdate = (e, id) => {
        console.log( id);
        const data = {
            status : e.target.value,
        }
        fetch(`http://localhost:5000/jobApplication/${id}`, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                alert("update successful")
            }
        })
        
    }
    
    return (
        <div className=" container mx-auto">
            ViewApplication {applicationData.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Update Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        applicationData.map((application, index) =>  <tr key={application._id} className="bg-base-200">
                        <th>{index + 1}</th>
                        <td>{application.applicant_email}</td>
                        <td>Quality Control Specialist</td>
                        <td>
                            <select onChange={(e)=>handleStatusUpdate(e, application._id )} defaultValue={application.status || 'Change status'} name="" className=" select">
                                <option disabled>Change status</option>
                                <option>Under Review</option>
                                <option>Set Interview</option>
                                <option>Hired</option>
                                <option>Rejected</option>
                            </select>
                        </td>
                    </tr>)
                    }
                    

                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default ViewApplication;