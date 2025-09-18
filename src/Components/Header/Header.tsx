import { IconBrandSwift, IconBell, IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();

  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between px-6 items-center font-['poppins']">
      <div className="flex gap-1 text-bright-sun-500">
        <IconBrandSwift className="h-8 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">Job RUSH</div>
      </div>
      <NavLinks />
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          <div>Sameer</div>
          <ProfileMenu />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="bright-sun.4" offset={7} size={7} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
