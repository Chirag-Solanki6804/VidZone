import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { closeSideBar } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const WatchVideo = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <iframe
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/" + id}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};

export default WatchVideo;
