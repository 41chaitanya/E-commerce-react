import React from "react";

const NoRoutePage = () => {
  return (
    <div className=" bg-gray-300 h-screen flex justify-center  items-center">
      <img
        src={`/images/noPageFound.webp`}
        className="rounded-full h-[500px] w-[500px] py-12 scale-95 hover:scale-100"
        alt=""
      />
  <div className="text-5xl mx-12 font-bold font-mono "> No Page Found </div>;
    </div>
  );
};

export default NoRoutePage;
