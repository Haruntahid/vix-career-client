import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

function TabCategory() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/all-jobs`).then((res) =>
      setJobs(res.data)
    );
  }, []);
  return (
    <div className="mt-10 lg:mt-20 container mx-auto">
      <h1 className="text-2xl font-semibold text-center text-txt-color capitalize lg:text-4xl">
        Explore Jobs By <span className="text-btn-color">Categories</span>
      </h1>

      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
        There are four categories of jobs in our site you can choose what you
        need
      </p>
      <Tabs>
        <div className="flex items-center justify-center">
          <TabList className="text-xs lg:text-[16px]">
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {jobs
              .filter((j) => j.job_category === "On Site")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {jobs
              .filter((j) => j.job_category === "Remote")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {jobs
              .filter((j) => j.job_category === "Hybrid")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {jobs
              .filter((j) => j.job_category === "Part Time")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabCategory;
