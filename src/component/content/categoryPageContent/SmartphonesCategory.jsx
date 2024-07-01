import React from "react";
import CategoryCard from "../../utils/CategoryCard";
import { v4 as uuidv4 } from "uuid";
const data = {
  smartPhones: [
    {
      id: uuidv4(),
      name: "Samsung",
    },
    {
      id: uuidv4(),
      name: "Apple",
    },
    {
      id: uuidv4(),
      name: "Xiaomi",
    },
    {
      id: uuidv4(),
      name: "OPPO",
    },
    {
      id: uuidv4(),
      name: "vivo",
    },
    {
      id: uuidv4(),
      name: "OnePlus",
    },
    {
      id: uuidv4(),
      name: "Google Pixel",
    },
    {
      id: uuidv4(),
      name: "Motorola",
    },
    {
      id: uuidv4(),
      name: "ASUS",
    },
  ],
};

const SmartphonesCategory = () => {
  return (
    <div>
        <div className="text-4xl font-bold font-mono text-center pt-5">

      Smartphones Category
        </div>
        <div className="grid grid-cols-12">

      <div className=" col-span-8 col-start-3 grid grid-cols-4">
        {data.smartPhones.map((smartphone) => (
            <>
            <CategoryCard key={smartphone.index} name={smartphone.name} />
          </>
        ))}
      </div>
        </div>
    </div>
  );
};

export default SmartphonesCategory;
