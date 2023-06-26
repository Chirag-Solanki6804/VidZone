import React from "react";

const Button = ({ name }) => {
  return (
    <button className="w-auto px-4 h-11 bg-slate-200 hover:bg-slate-300 rounded-md">
      {name}
    </button>
  );
};

export default Button;
