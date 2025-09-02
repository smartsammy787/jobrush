import { Button, Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfile = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link className="my-4 inline-block" to="/find-talent">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <Divider mx="md" size="xs" />
      <div className="flex gap-5">
        <Profile {...profile} />
        <RecommendTalent />
      </div>
    </div>
  );
};

export default TalentProfile;
