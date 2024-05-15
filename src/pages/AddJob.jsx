import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function AddJob() {
  const { user } = useAuth();
  console.log(user);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  // date part
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString();
  // Format the date in 'dd/mm/yyyy' format
  const formattedDate = `${day}/${month}/${year}`;

  // handel Post job
  const handelPostJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const job_title = form.job_title.value;
    const job_category = form.job_category.value;
    const salary_range = form.salary_range.value;
    const job_posting_date = form.job_posting_date.value;
    const application_deadline = startDate;
    const short_description = form.short_description.value;

    if (
      !name ||
      !email ||
      !photo ||
      !job_title ||
      !job_category ||
      !salary_range ||
      !job_posting_date ||
      !application_deadline ||
      !short_description
    ) {
      toast.error("Please Fill all the data");
      return;
    }

    const jobData = {
      name,
      email,
      photo,
      job_title,
      job_category,
      salary_range,
      job_posting_date,
      application_deadline,
      short_description,
      job_applicants: 0,
    };

    console.log(jobData);
    axios
      .post(`${import.meta.env.VITE_API_URL}/all-jobs`, jobData)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Added Job",
            icon: "success",
          });
          form.reset();
          navigate("/my-job");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Helmet>
        <title>Vix-Career | Add-Jobs</title>
      </Helmet>
      <h2 className="text-3xl lg:text-6xl text-btn-color font-bold text-center my-5 lg:my-10">
        Post a Job
      </h2>
      <div className="container mx-auto bg-bg-color p-5 rounded-lg shadow-2xl">
        <form onSubmit={handelPostJob} className="space-y-2 lg:space-y-6">
          {/* user row*/}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            <div className="w-full lg:w-1/2">
              <label className="text-btn-color block mb-2">Name:</label>
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
              <label className="text-btn-color block mb-2">Email:</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                defaultValue={user.email}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>
          {/* row 1 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            <div className="w-full lg:w-1/2">
              <label className="text-btn-color block mb-2">PhotoURL:</label>
              <input
                type="text"
                placeholder="Picture URL of the Job Banner"
                name="photo"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <label className="text-btn-color block mb-2">Job Title:</label>
              <input
                type="text"
                placeholder="Job Title"
                name="job_title"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            <div className="w-full lg:w-1/2">
              <label className="text-btn-color block mb-2">Job Category:</label>
              <select
                id="Job Category"
                name="job_category"
                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              >
                <option value="On Site" className="py-2">
                  On Site
                </option>
                <option value="Remote" className="py-2">
                  Remote
                </option>
                <option value="Part Time" className="py-2">
                  Part Time
                </option>
                <option value="Hybrid" className="py-2">
                  Hybrid
                </option>
              </select>
            </div>
            <div className="w-full lg:w-1/2">
              <label className="text-btn-color block mb-2">Salary range:</label>
              <input
                placeholder="Salary range"
                type="text"
                name="salary_range"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            <div className="w-full lg:w-1/2">
              <label className="text-btn-color block mb-2">
                Job Posting Date:
              </label>
              <input
                defaultValue={formattedDate}
                readOnly
                placeholder="Job Posting Date"
                type="text"
                name="job_posting_date"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-1/2">
                <label className="text-btn-color block mb-2">
                  Application Deadline:
                </label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  className="min-w-full flex rounded-lg border border-gray-300 px-4 h-[48px]"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          {/* row-4 */}
          <div className="w-full">
            <label className="text-btn-color block mb-2">
              Short Description:
            </label>
            <textarea
              placeholder="Short description"
              type="text"
              name="short_description"
              className="input input-bordered w-full py-2"
            ></textarea>
          </div>

          <div className="text-center">
            <input
              className="btn px-6 py-2 rounded-lg w-full lg:w-60 mt-5 bg-btn-color hover:bg-inherit border border-btn-color text-white hover:bg-txt-color"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddJob;
