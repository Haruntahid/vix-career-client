import { useLoaderData, useNavigate } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function JobDetails() {
  const [error, setError] = useState("");
  const job = useLoaderData();
  const navigate = useNavigate();

  const { user } = useAuth();
  const {
    _id,
    email,
    name,
    photo,
    job_title,
    job_category,
    salary_range,
    job_posting_date,
    application_deadline,
    job_applicants,
    short_description,
  } = job || {};

  //   handel application
  const handleApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const link = form.link.value;
    const jobId = _id;
    const photoURL = photo;
    const jobTitle = job_title;
    const jobCategory = job_category;

    setError("");

    // Check if the application deadline is over
    const deadline = new Date(application_deadline);
    const today = new Date();

    if (deadline < today) {
      setError("Application deadline is over");
      return;
    }

    if (user?.email === job?.email) {
      setError("You can't Apply on Your Posted job");
      return toast.error("Action not permitted!");
    }

    if (!link) {
      setError("You Need Provide Resume Link");
      toast.error("You Need Provide Resume Link");
      return;
    }

    const applyData = {
      jobId,
      photoURL,
      jobTitle,
      jobCategory,
      name,
      email,
      link,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/job-apply`, applyData)
      .then((res) => {
        if (res.data.insertedId) {
          navigate("/applied-jobs");
          Swal.fire({
            title: "Success!",
            text: "Successfully Applied Job",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
      });
  };
  return (
    <>
      <Helmet>
        <title>Vix-Career | Job-Details</title>
      </Helmet>
      <div className="container mx-auto">
        <p className="text-2xl text-center lg:text-start lg:text-4xl font-semibold my-5">
          Job Description
        </p>
        <div className="bg-bg-color p-4 lg:p-8 rounded-xl">
          <div className="bg-white p-5 flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row gap-3 items-center lg:gap-10">
              <img src={photo} className="w-24 h-24" alt="" />
              <div className="text-center lg:text-start">
                <p className="text-3xl font-bold my-3">{job_title}</p>
                <p>Job Posted By : {name}</p>
              </div>
            </div>
            <div>
              <button
                className="btn bg-btn-color mt-5 lg:mt-0 text-white hover:bg-txt-color"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Apply
              </button>

              {/*----------------------- modal------------------------------ */}
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box lg:w-11/12 lg:max-w-5xl">
                  <h3 className="font-bold text-3xl my-10 text-center">
                    You are Applying For{" "}
                    <span className="text-btn-color">{job_title}!</span>
                  </h3>
                  {/* form */}
                  <div>
                    <form action="" onSubmit={handleApplication}>
                      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                        <div className="w-full lg:w-1/2">
                          <label className="text-btn-color block mb-2">
                            Name:
                          </label>
                          <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            defaultValue={user.displayName}
                            readOnly
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full lg:w-1/2">
                          <label className="text-btn-color block mb-2">
                            Email:
                          </label>
                          <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={user.email}
                            className="input input-bordered w-full"
                            readOnly
                          />
                        </div>
                      </div>
                      {/* row-2 */}
                      <div className="my-8">
                        <label className="text-btn-color block mb-2">
                          Submit Resume Link:
                        </label>
                        <input
                          placeholder="Submit Resume Link"
                          type="text"
                          name="link"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div>
                        <p>
                          Application Deadline :{" "}
                          {new Date(application_deadline).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                      {/* btn */}
                      <p className="text-rose-600 font-xl text-center my-5">
                        {error}
                      </p>
                      <div className="text-center">
                        <input
                          type="submit"
                          className="btn bg-btn-color hover:bg-txt-color text-white"
                          value="Submit Application"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => setError("")}
                      >
                        ✕
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        {/* description section */}
        <div className="flex flex-col-reverse lg:flex-row mt-5 lg:mt-10 gap-8 lg:gap-10">
          <div className="w-full lg:w-3/5 px-3">
            <p className="text-2xl font-bold mb-3">Description</p>
            <p>{short_description}</p>
            <div className="my-10">
              <p className="text-2xl font-bold mb-3">Responsibilities</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center">
                  {" "}
                  <MdVerifiedUser className="text-green-400" size={18} />
                  Community engagement to ensure that is supported and actively
                  represented online
                </li>
                <li className="flex gap-2 items-center">
                  {" "}
                  <MdVerifiedUser className="text-green-400" size={18} />
                  Marketing and strategy support
                </li>
                <li className="flex gap-2 items-center">
                  {" "}
                  <MdVerifiedUser className="text-green-400" size={18} />
                  Engage with online communities
                </li>
                <li className="flex gap-2 items-center">
                  <MdVerifiedUser className="text-green-400" size={18} />
                  Focus on social media content development and publication
                </li>
              </ul>
            </div>
            <p className="text-2xl font-bold mb-3">Nice-To-Haves</p>
            <ul className="space-y-2">
              <li className="flex gap-2 items-center">
                {" "}
                <MdVerifiedUser className="text-green-400" size={18} />
                Fluent in English
              </li>
              <li className="flex gap-2 items-center">
                {" "}
                <MdVerifiedUser className="text-green-400" size={18} />
                Project management skills
              </li>
              <li className="flex gap-2 items-center">
                {" "}
                <MdVerifiedUser className="text-green-400" size={18} />
                Online communities
              </li>
              <li className="flex gap-2 items-center">
                <MdVerifiedUser className="text-green-400" size={18} />
                Problem Solving
              </li>
            </ul>
          </div>
          {/* sidebar */}
          <div className="w-full lg:w-2/5 border-2 rounded-2xl border-btn-color p-5">
            <div className="divider">
              <p className="text-2xl font-bold text-center">About This Role</p>
            </div>
            <div className="space-y-2">
              <span className="px-5 py-1 rounded-full inline-block my-5 bg-btn-color">
                {job_applicants} Applied
              </span>
              <div className="divider"></div>
              <p className="flex justify-between">
                Apply Before{" "}
                <span className="font-semibold">
                  {new Date(application_deadline).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </p>
              <div className="divider"></div>
              <p className="flex justify-between">
                Job Posted On{" "}
                <span className="font-semibold">{job_posting_date}</span>
              </p>
              <div className="divider"></div>
              <p className="flex justify-between">
                Job Category
                <span className="font-semibold">{job_category}</span>
              </p>
              <div className="divider"></div>
              <p className="flex justify-between">
                Salary <span className="font-semibold">{salary_range}</span>
              </p>
            </div>
            <div className="mt-10">
              <div className="divider">
                <p className="text-2xl font-bold text-center">Contact Info</p>
              </div>
              <p className="flex justify-between">
                Email <span className="font-semibold">{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
