import React from "react";
import Avatar from "../assets/images/Avatar.png";
import { NotificationSvg } from "./IconsSvgs";
import { Searchbar } from "./Searchbar";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#1E1E1E] rounded sm:w-[100%] md:w-[99%] h-fit flex justify-center md:justify-self-end">
        <div className="py-[28px] flex items-center justify-between h-fit w-[95%]">
          <Searchbar/>
          <div className="flex items-center gap-4">
            <NotificationSvg />
            <img src={Avatar} alt="avatar..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
