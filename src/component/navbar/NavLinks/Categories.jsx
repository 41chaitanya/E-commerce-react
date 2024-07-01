import React from "react";
import { Routes, Route } from 'react-router-dom';
import CategoriesContent from "../../content/landingPageContent/CategoriesContent";
import SmartphonesCategory from "../../content/categoryPageContent/SmartphonesCategory";
import ShoesCategory from "../../content/categoryPageContent/ShoesCategory";
import LaptopCategory from "../../content/categoryPageContent/LaptopCategory";
import HomeAndFurnitureCategory from "../../content/categoryPageContent/HomeAndFurnitureCategory";
import ClothesCategory from "../../content/categoryPageContent/ClothesCategory";
import CarsCategory from "../../content/categoryPageContent/CarsCategory";
import RealEstateCategory from "../../content/categoryPageContent/RealEstateCategory";

const Categories = () => {
  return (
    <>
       <div>
      <Routes>
        <Route index element={<CategoriesContent />} />
        <Route path="SmartphonesCategory" element={<SmartphonesCategory/>} />
        <Route path="ShoesCategory" element={<ShoesCategory />} />
        <Route path="LaptopCategory" element={<LaptopCategory />} />
        <Route path="RealEstateCategory" element={<RealEstateCategory />} />
        <Route path="HomeAndFurnitureCategory" element={<HomeAndFurnitureCategory />} />
        <Route path="ClothesCategory" element={<ClothesCategory />} />
        <Route path="CarsCategory" element={<CarsCategory />} />
      </Routes>
    </div>
    </>
  );
};

export default Categories;
