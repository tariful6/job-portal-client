import axios from "axios";
import { useEffect, useState } from "react";


const useJobs = (sort, search, maxSalary, minSalary) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
        .then(res => {
            setLoading(false)
            setJobs(res.data)
        })

    },[sort, search,maxSalary, minSalary ])
    return {jobs, loading}
};

export default useJobs;