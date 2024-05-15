import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function AllJobs() {
  const [count, setCount] = useState(0);
  const itemPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((ele) => ele + 1);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  // console.log(pages);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/jobs?page=${
          currentPage - 1
        }&size=${itemPerPage}&search=${search}`
      );
      setJobs(data.jobs);
      setCount(data.totalCount);
    };
    getData();
  }, [currentPage, itemPerPage, search]);

  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  console.log(search);

  return (
    <div className="container mx-auto">
      <div>
        <form onSubmit={handleSearch}>
          <div className="flex p-1 justify-center overflow-hidded rounded-lg my-8">
            <input
              type="text"
              placeholder="Search Here..."
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              className="border-2 border-r-0 focus:outline-none w-1/5 px-3 rounded-2xl rounded-r-none"
            />
            <input
              className="btn rounded-2xl bg-btn-color hover:bg-inherit border rounded-l-none border-btn-color text-white hover:bg-txt-color"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
      {/* page */}
      <div className="flex justify-center items-center mt-20">
        <button
          disabled={currentPage === 1}
          className="btn bg-btn-color text-white"
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
          className="btn bg-btn-color text-white"
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
