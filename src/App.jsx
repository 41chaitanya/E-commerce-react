import { Route, Routes } from "react-router-dom"
import Home from "./component/navbar/NavLinks/Home"
import Categories from "./component/navbar/NavLinks/Categories"
import Blogs from "./component/navbar/NavLinks/Blogs"
import ContactUs from "./component/navbar/NavLinks/ContactUs"
import NavBar from "./component/navbar/NavLinks/NavBar"


function App() {

  return (
    <>
    
    <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="contact-us" element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
