import React from "react";

const MyVideo = ({ snippet, statistics, id }) => {
  console.log("sni");
  console.log(snippet);
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  return (
    <div className="w-96 h-96 shadow-2xl bg-black cursor-pointer">
      <img
        className="w-full rounded-xl"
        src={thumbnails?.high?.url}
        alt="thumbnails"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xs mb-2">{title}</div>
      </div>
    </div>
  );
};

export default MyVideo;
