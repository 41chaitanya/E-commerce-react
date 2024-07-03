import React from "react";


const CategoryCard = ({name,index}) => {
  return (
    <div
   
      id="card"
      className="rounded-xl border-4 mb-5 mx-2 mt-8 w-60 h-64 hover:cursor-pointer"
    >
      <div className="bg-gray-200">
        <img
          className=" scale-90 hover:scale-100 transition duration-500 object-cover  h-48 "
          src={`/public/images/noPageFound.webp`}
          alt=""
        />
      </div>
      <div className="content-center ms- text-xl h-16 text-center">
       {name}
      </div>
    </div>
  );
};

export default CategoryCard;
