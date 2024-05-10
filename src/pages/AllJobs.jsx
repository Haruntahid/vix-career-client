import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function AllJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-jobs`);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-2 gap-5">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default AllJobs;
