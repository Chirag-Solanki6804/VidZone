import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const ButtonNames = [
    "All",
    "JavaScript",
    "Cricket",
    "Computer Programing",
    "Gaming",
    "Music",
    "Comedy",
    "Live",
    "Physics",
    "Wendesday",
  ];
  return (
    <div className="flex gap-4 m-5">
      {ButtonNames.map((name, index) => {
        return <Button name={name} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
