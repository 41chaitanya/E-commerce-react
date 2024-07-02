import { Route, Routes } from "react-router-dom";
import Home from "./component/navbar/NavLinks/Home";
import Categories from "./component/navbar/NavLinks/Categories";
import Blogs from "./component/navbar/NavLinks/Blogs";
import ContactUs from "./component/navbar/NavLinks/ContactUs";
import NavBar from "./component/navbar/NavLinks/NavBar";
import NoRoutePage from "./component/navbar/NoRoutePage";
import SmartphonesCategory from "./component/content/categoryPageContent/SmartphonesCategory";
import ShoesCategory from "./component/content/categoryPageContent/ShoesCategory";
import LaptopCategory from "./component/content/categoryPageContent/LaptopCategory";
import HomeAndFurnitureCategory from "./component/content/categoryPageContent/HomeAndFurnitureCategory";
import ClothesCategory from "./component/content/categoryPageContent/ClothesCategory";
import CarsCategory from "./component/content/categoryPageContent/CarsCategory";
import RealEstateCategory from "./component/content/categoryPageContent/RealEstateCategory";

function App() {
  return (
    <>
  
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}/>
        <Route path="SmartphonesCategory" element={<SmartphonesCategory />} />
          <Route path="ShoesCategory" element={<ShoesCategory />} />
          <Route path="LaptopCategory" element={<LaptopCategory />} />
          <Route path="RealEstateCategory" element={<RealEstateCategory />} />
          <Route
            path="HomeAndFurnitureCategory"
            element={<HomeAndFurnitureCategory />}
          />
          <Route path="ClothesCategory" element={<ClothesCategory />} />
          <Route path="CarsCategory" element={<CarsCategory />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NoRoutePage />} />
      </Routes>
    </>
  );
}

export default App;
