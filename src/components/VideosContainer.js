import React, { useEffect, useState } from "react";
import YOUTUBE_API_URL from "../utils/config";
import MyVideo from "./myVideo";

const VideosContainer = () => {
  const [videos, setVideos] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const jsonData = await data.json();
    console.log("json data");
    console.log(jsonData);
    setVideos(jsonData);
  };

  return (
    <div className="flex gap-4 my-6 flex-wrap ml-14">
      {videos?.items?.map((video) => {
        return <MyVideo {...video} key={video.id} />;
      })}
    </div>
  );
};

export default VideosContainer;
