import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <ButtonList />
        <VideosContainer />
      </div>
    </div>
  );
};

export default Body;
