import React from 'react'
import { v4 as uuidv4 } from "uuid";
import CategoryCard from '../../utils/CategoryCard';

const data = {
    shoes: [
      {
        id: uuidv4(),
        name: "Nike",
      },
      {
        id: uuidv4(),
        name: "Adidas",
      },
      {
        id: uuidv4(),
        name: "Puma",
      },
      {
        id: uuidv4(),
        name: "New Balance",
      },
      {
        id: uuidv4(),
        name: "Converse",
      },
      {
        id: uuidv4(),
        name: "Vans",
      },
      // ... add more shoe brands
    ],
  };
const ShoesCategory = () => {
  return (
    <div>
      <div className="text-4xl font-bold font-mono text-center pt-5">
        ShoesCategory
      </div>
      <div className="grid grid-cols-12">
        <div className=" col-span-8 col-start-3 grid md:grid-cols-4 grid-cols-1">
          {data.shoes.map((shoe) => (
            <>
              <CategoryCard key={shoe.id} name={shoe.name} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoesCategory
