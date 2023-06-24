import React from "react";
import hamburgerIcon from "../assets/images/menu.png";
import userProfile from "../assets/images/userProfile.jpg";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleSideBar = () => {
    console.log("click");
    dispatch(toggleSideBar());
  };

  return (
    <div className="w-full h-20 flex justify-between items-center px-10 shadow-xl">
      <div className="flex items-center gap-5">
        <img
          src={hamburgerIcon}
          alt="menu-icon"
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            handleToggleSideBar();
          }}
        />
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="Youtube-Logo"
          className="w-32 h-14"
        />
      </div>
      <div className="border-2 rounded-full border-black">
        <input
          type="text"
          placeholder="search"
          className="w-96 h-10 p-4 border-none outline-none rounded-l-full border-gray-300"
        />
        <button className="rounded-r-full h-10 p-1 w-20 bg-slate-400 border-gray-300">
          Search
        </button>
      </div>
      <div>
        <img src={userProfile} alt="userProfile" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Header;
