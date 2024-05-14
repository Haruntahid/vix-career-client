import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

function AppliedJobs() {
  const { user } = useAuth();
  console.log(user.email);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/my-apply/${user?.email}`
      );
      setJobs(data);
    };
    getData();
  }, [user?.email]);

  return (
    <>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center justify-center gap-x-3">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 ">
            My Applied Jobs
          </h2>

          <span className="px-3 py-1 text-xs text-white bg-btn-color rounded-full ">
            {jobs.length} Job
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Company Logo</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Job Category
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-bg-color divide-y divide-btn-color">
                    {jobs.map((job) => (
                      <tr key={job._id}>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <img
                            className="w-12 h-12"
                            src={job.photoURL}
                            alt=""
                          />
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {job.jobTitle}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className={`px-3 py-1 ${
                                job.job_category === "On Site" &&
                                "text-blue-700 bg-blue-100/60"
                              } ${
                                job.job_category === "Remote" &&
                                "text-emerald-700 bg-emerald-100/60"
                              } ${
                                job.job_category === "Hybrid" &&
                                "text-pink-700 bg-pink-100/60"
                              } 
                              } ${
                                job.job_category === "Part Time" &&
                                "text-orange-700 bg-orange-100/60"
                              } text-xs  rounded-full`}
                            >
                              {job.jobCategory}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <Link
                            to={`/job/${job.jobId}`}
                            className="btn bg-btn-color hover:bg-txt-color text-white"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppliedJobs;
