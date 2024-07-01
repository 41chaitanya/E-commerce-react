import React from 'react'
import { v4 as uuidv4 } from "uuid";

import CategoryCard from '../../utils/CategoryCard'
const data={
    laptops:[
        {
            id: uuidv4(),
            name: "MSI",
          },
          {
            id: uuidv4(),
            name: "Razer",
          },
          {
            id: uuidv4(),
            name: "Asus",
          },
          {
            id: uuidv4(),
            name: "Acer",
          },
          {
            id: uuidv4(),
            name: "Dell",
          },
         
    ]
    
}
const LaptopCategory = () => {
  return (
    <div>
    <div className="text-4xl font-bold font-mono text-center pt-5">

    Laptop Category
    </div>
    <div className="grid grid-cols-12">

  <div className=" col-span-8 col-start-3 grid grid-cols-4">
    {data.laptops.map((laptop) => (
        <>
        <CategoryCard key={laptop.index} name={laptop.name} />
      </>
    ))}
  </div>
    </div>
</div>
  )
}

export default LaptopCategory
