import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddJob() {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  return (
    <>
      <h2 className="text-3xl lg:text-6xl text-btn-color font-bold text-center my-5 lg:my-10">
        Post a Job
      </h2>
      <div className="container mx-auto bg-bg-color p-5 rounded-lg">
        <form onSubmit="" className="space-y-2 lg:space-y-6">
          {/* user row*/}
          <div className="flex gap-2 lg:gap-5">
            <div className="w-1/2">
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
            <div className="w-1/2">
              <label className="text-btn-color block mb-2">Email:</label>
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
          {/* row 1 */}
          <div className="flex gap-2 lg:gap-5">
            <div className="w-1/2">
              <label className="text-btn-color block mb-2">PhotoURL:</label>
              <input
                type="text"
                placeholder="Picture URL of the Job Banner"
                name="photo"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-1/2">
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
          <div className="flex gap-2 lg:gap-5">
            <div className="w-1/2">
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
                <option value="Part-Time" className="py-2">
                  Part-Time
                </option>
                <option value="Hybrid" className="py-2">
                  Hybrid
                </option>
              </select>
            </div>
            <div className="w-1/2">
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
          <div className="flex gap-2 lg:gap-5">
            <div className="w-1/2">
              <label className="text-btn-color block mb-2">
                Job Posting Date:
              </label>
              <input
                placeholder="Job Posting Date"
                type="text"
                name="rating"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="text-btn-color block mb-2">
                Application Deadline:
              </label>
              <DatePicker
                // style={{ width: "100%" }}
                className="min-w-full rounded-lg border border-gray-300 px-4 lg:h-[48px]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
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
              className="btn px-6 py-2 rounded-lg w-full lg:w-60 mt-5 bg-rose-600 hover:bg-inherit border border-rose-600 hover:text-white"
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
