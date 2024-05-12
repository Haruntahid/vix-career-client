import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function AllJobs() {
  // const [search, setSearch] = useState("");
  // const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-jobs`);
      setJobs(data);
    };
    getData();
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(searchText);
  // };
  return (
    <div className="container mx-auto grid grid-cols-2 gap-5">
      {/* <form onSubmit={handleSearch}>
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            name="search"
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </form> */}
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default AllJobs;
