import React from "react";
import { BiCategory } from "react-icons/bi";
import Card from "../utils/Card";

const data = {
  categories: [
    {
      short: "smartphones",
      categoryId: 1,
      name: "Smartphone",
    },
    {
      short: "shoes",
      categoryId: 2,
      name: "Shoes",
    },
    {
      short: "realState",
      categoryId: 3,
      name: "Reale State",
    },
    {
      short: "laptop",
      categoryId: 4,
      name: "Laptop",
    },
    {
      short: "homeAndFurniture",
      categoryId: 5,
      name: "Home & Furniture",
    },
    {
      short: "clothes",
      categoryId: 6,
      name: "Clothes",
    },
    {
      short: "cars",
      categoryId: 7,
      name: "Cars",
    },
  ],
};
const CategoriesContent = () => {
  return (
    <>
      <div id="homeCategory" className="grid grid-cols-12 gap-2">
        <div className=" col-span-8 col-start-3">
          <div>+</div>

          <div className=" grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {data.categories.map((category) => (
              <Card
                key={category.categoryId}
                details={category.name}
                short={category.short}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesContent;
