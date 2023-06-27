import React from "react";

const MyVideo = ({ snippet, statistics, id }) => {
  console.log("sni");
  console.log(snippet);
  console.log("sta");
  console.log(statistics);
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  return (
    <div className="w-96 h-96 shadow-xl cursor-pointer">
      <img
        className="w-full rounded-xl"
        src={thumbnails?.high?.url}
        alt="thumbnails"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-base mb-2 text-blue-800">{title}</div>
        <div className="flex flex-col gap-3 mt-5">
          <div className="text-sm">{snippet.channelTitle}</div>
          <div className="text-xs">{statistics.viewCount} views</div>
        </div>
      </div>
    </div>
  );
};

export default MyVideo;
