import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const JobsCart = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    company_logo,
    company,
    description,
    requirements,
  } = job || {};
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <div className=" flex items-center p-6">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h2 className="card-title">{company}</h2>
          <p className=" flex items-center gap-2">
            <IoLocationSharp />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className=" badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className=" flex gap-2 flex-wrap">
          {requirements.map((skill, index) => (
            <p key={index} className=" border rounded-md text-center ">{skill}</p>
          ))}
        </div>

        <div className="card-actions justify-end items-center mt-6">
          <p> Salary : {salaryRange.min} - {salaryRange.max} - {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
             <button className="btn btn-primary">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCart;
