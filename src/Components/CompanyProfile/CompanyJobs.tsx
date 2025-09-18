import React from "react";
import JobCard from "../FindJobs/JobCard";
import { jobList } from "../../Data/JobsData";

const CompanyJobs = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default CompanyJobs;
