import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const {
    _id,
    name,
    job_title,
    job_category,
    salary_range,
    job_posting_date,
    application_deadline,
    job_applicants,
  } = job;
  return (
    <>
      <div className="p-3 lg:p-5 rounded-xl bg-bg-color shadow-md">
        <p className="my-2 text-[16px] font-medium">
          Posted on : {job_posting_date}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs">
            Deadline{" "}
            {new Date(application_deadline).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <p className="px-4 text-xs py-1 rounded-full text-txt-color bg-btn-color">
            {job_category}
          </p>
        </div>
        <p className="text-2xl font-semibold my-2 lg:my-3">{job_title}</p>
        <p className="text-[16px] text-gray-500 font-bold">
          Salary : {salary_range}
        </p>
        <div className="divider"></div>
        <p>
          Job Posted By : <span>{name}</span>
        </p>
        <p className="text-xs">Job Applicants : {job_applicants}</p>
        <Link
          to={`/job/${_id}`}
          className="btn btn-block bg-btn-color text-white hover:bg-txt-color mt-5"
        >
          View Details
        </Link>
      </div>
    </>
  );
}

JobCard.propTypes = {
  job: PropTypes.object,
};

export default JobCard;
