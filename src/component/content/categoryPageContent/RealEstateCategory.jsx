import React from 'react'
import { v4 as uuidv4 } from "uuid";
import CategoryCard from '../../utils/CategoryCard';

const data={
    realEstates:[
        {
            id: uuidv4(),
            name: "Villa",
          },
          {
            id: uuidv4(),
            name: "Townhouses",
          },
          {
            id: uuidv4(),
            name: "Condos",
          },
          {
            id: uuidv4(),
            name: "Single family house",
          },
          {
            id: uuidv4(),
            name: "Apartments",
          },
         
    ]
    
}
const RealEstateCategory = () => {
  return (
    <div>
    <div className="text-4xl font-bold font-mono text-center pt-5">

    Real Estate Category
    </div>
    <div className="grid grid-cols-12">

  <div className=" col-span-8 col-start-3 grid md:grid-cols-4 grid-cols-1">
    {data.realEstates.map((realEstate) => (
        <>
        <CategoryCard key={realEstate.id} name={realEstate.name} />
      </>
    ))}
  </div>
    </div>
</div>
  )
}

export default RealEstateCategory
