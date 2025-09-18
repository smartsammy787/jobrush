import { Divider } from "@mantine/core";
import SearchBar from "../Components/FindJobs/SearchBar";
import Jobs from "../Components/FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider mx="xs" size="xs" />
      <Jobs />
    </div>
  );
};

export default FindJobs;
