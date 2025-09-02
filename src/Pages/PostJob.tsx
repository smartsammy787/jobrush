import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import Profile from "../TalentProfile/Profile";
import PJobs from "../PostJob/PJobs";

const PostJob = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <PJobs />
    </div>
  );
};

export default PostJob;
