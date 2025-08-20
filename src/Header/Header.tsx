import {IconBrandSwift, IconBell, IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from '@mantine/core';
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between p-6 items-center fixed top-0 left-0 right-0 z-50">
            <div className="flex gap-1 text-bright-sun-500">
                <IconBrandSwift className="h-8 w-8" stroke={2.5}/>
                <div className="text-3xl font-semibold">Job RUSH</div>
            </div>
            <NavLinks />
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                    <div>Sameer</div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5}/>
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="bright-sun.4" offset={7} size={7} processing>   
                        <IconBell stroke={1.5}/>
                    </Indicator>
                </div>
            </div>
        </div>
    );
}

export default Header;