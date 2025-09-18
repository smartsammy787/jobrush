import { Divider } from "@mantine/core";
import SearchBar from "../Components/FindTalent/SearchBar";
import Talents from "../Components/FindTalent/Talents";

const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider mx="xs" size="xs" />
      <Talents />
    </div>
  );
};

export default FindTalent;
