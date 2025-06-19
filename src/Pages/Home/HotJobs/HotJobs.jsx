import React, { useEffect, useState } from "react";
import JobsCart from "./JobsCart";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className=" container mx-auto  grid grid-cols-3 gap-6 py-9">
      {jobs.map((job) => (
        <JobsCart key={job._id} job={job}></JobsCart>
      ))}
    </div>
  );
};

export default HotJobs;
