import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function AllJobs() {
  const [count, setCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [jobs, setJobs] = useState([]);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((ele) => ele + 1);

  console.log(pages);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/all-jobs?page=${currentPage}&size=${itemPerPage}`
      );
      setJobs(data);
      setCount(data.length);
    };
    getData();
  }, [currentPage, itemPerPage]);

  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-5 mt-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
      {/* page */}
      <div className="flex justify-center items-center mt-20">
        <button
          disabled={currentPage === 0}
          className="btn bg-btn-color"
          onClick={() => handlePaginationButton(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "btn btn-success mx-4" : "mx-4"}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className="btn bg-btn-color"
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllJobs;
