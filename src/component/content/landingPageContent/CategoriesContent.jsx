import { root } from "postcss";
import React from "react";
import { useNavigate } from "react-router-dom";

const data = {
  categories: [
    {
      short: "smartphones",
      categoryId: 1,
      details: "Smartphone",
      routesName: "SmartphonesCategory",
    },
    {
      short: "shoes",
      categoryId: 2,
      details: "Shoes",
      routesName: "ShoesCategory",
    },
    {
      short: "realState",
      categoryId: 3,
      details: "Reale State",
      routesName: "RealEstateCategory",
    },
    {
      short: "laptop",
      categoryId: 4,
      details: "Laptop",
      routesName: "LaptopCategory",
    },
    {
      short: "homeAndFurniture",
      categoryId: 5,
      details: "Home & Furniture",
      routesName: "HomeAndFurnitureCategory",
    },
    {
      short: "clothes",
      categoryId: 6,
      details: "Clothes",
      routesName: "ClothesCategory",
    },
    {
      short: "cars",
      categoryId: 7,
      details: "Cars",
      routesName: "CarsCategory",
    },
  ],
};

const CategoriesContent = () => {
  const categoryNested = useNavigate();
  return (
    <>
      <div id="homeCategory" className="grid grid-cols-12 gap-2">
        <div className=" col-span-8 col-start-3">
          <div className=" grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {data.categories.map((category) => (
              <div
                onClick={()=>categoryNested(`/${category.routesName}`)}
                id="card"
                className="rounded-xl border-4 mb-5 mx-2 mt-8 w-60 h-64 hover:cursor-pointer"
              >
                <div className="bg-gray-200">
                  <img
                    className=" scale-90 hover:scale-100 transition duration-500 object-cover  h-48 "
                    src={`/src/assets/images/${category.short}.png`}
                    alt=""
                  />
                </div>
                <div className="content-center ms- text-xl h-16 text-center">
                  {" "}
                  {category.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesContent;
