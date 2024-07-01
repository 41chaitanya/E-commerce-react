import React from "react";
import manPointer from "/src/assets/man-pointer.jpg";

const SearchProductDiv = () => {
  return (
    <>
      <div className="grid grid-cols-8 items-center">
        <div className="col-span-4 col-start-3 bg-gray-200 h-52 text-center content-center ">
          <div>AAJeeO</div>
          <div>Buy and Sell New Things Near You</div>
          <div>
            <form action="">
              <input type="text" name="keyword" placeholder="Enter Keyword" />
              <select >
                <option value="all">All</option>
                <option value="cars">Cars</option>
                <option value="cloths">Cloths</option>
                <option value="home-furniture">Home Furniture</option>
                <option value="laptop">Laptop</option>
                <option value="real-estate">Real Estate</option>
                <option value="shoes">Shoes</option>
                <option value="smartphone">Smartphone</option>
              </select>
              <select >
                <option value="all">All Countries</option>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="united-states">United States</option>
                <option value="canada">Canada</option>
                <option value="brazil">Brazil</option>
                <option value="australia">Australia</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
              </select>
              <button className="bg-black text-white p-2">Search</button>
            </form>
          </div>
          <div>Popular Categories</div>
          <div className="grid grid-cols-8 ">
            {/* links for category pagees */}
            <div className="col-span-6 col-start-2 grid grid-cols-6 gap-12 px-1">

            <div className="bg-white rounded-lg whitespace-nowrap text-sm  w-24">Cars</div>
            <div className="bg-white rounded-lg whitespace-nowrap  text-sm w-24">Cloths</div>
            <div className="bg-white rounded-lg whitespace-nowrap text-sm  w-24">Real Estate</div>
            <div className="bg-white rounded-lg whitespace-nowrap  text-sm w-24">Smartphone</div>
            <div className="bg-white rounded-lg whitespace-nowrap text-sm  w-24">Shoes</div>
            <div className="bg-white rounded-lg whitespace-nowrap  text-sm w-24">Laptop</div>
            </div>
          </div>
        </div>
        <div className="md:h-[36rem] md:w-96  hidden md:block col-span-1 col-start-7 ">
          <img src={manPointer} alt="" className="blur-little-xs" />
        </div>
      </div>
    </>
  );
};

export default SearchProductDiv;
