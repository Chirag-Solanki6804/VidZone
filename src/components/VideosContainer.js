import React, { useEffect, useState } from "react";
import YOUTUBE_API_URL from "../utils/config";
import MyVideo from "./myVideo";
import { ShimmerCards } from "./Shimmer";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoaded(true);
    const data = await fetch(YOUTUBE_API_URL);
    const jsonData = await data.json();
    console.log("json data");
    console.log(jsonData);
    setVideos(jsonData);
    setIsLoaded(false);
  };

  return (
    <>
      {isLoaded ? (
        <ShimmerCards />
      ) : (
        <div className="flex gap-4 my-6 flex-wrap ml-14">
          {videos?.items?.map((video) => {
            return (
              <Link to={"/watch/" + video.id} key={video.id}>
                <MyVideo {...video} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default VideosContainer;
