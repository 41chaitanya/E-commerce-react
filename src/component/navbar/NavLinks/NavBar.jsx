import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoCompany from "/public/AjeeO-icon.webp";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navIsActive = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      <div className="bg-gray-300">
        {/* toggle button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* nav bar for desktop */}
        <nav
          id="navLinks"
          className="md:grid md:grid-cols-8 hidden items-center py-3 "
        >
          <div className="col-start-2 col-span-1">
            <img src={logoCompany} alt="logo-conpany" className="w-12 h-12 " />
          </div>

          <div className=" col-start-3 col-span-4 ">
            <div className="grid grid-cols-4 text-xl font-slightlight">
              <NavLink style={navIsActive} to={"/"}>
                Home
              </NavLink>
              <NavLink style={navIsActive} to={"categories"}>
                Categories
              </NavLink>
              <NavLink style={navIsActive} to={"blogs"}>
                Blog
              </NavLink>

              <NavLink style={navIsActive} to={"contact-us"}>
                Contact Us
              </NavLink>
            </div>
          </div>
          {/* login search */}
          <div className="col-span-2">
            <div className="flex gap-5 justify-end mr-8 ">
              {/* searchIcon */}
              <div className="">
                <CiSearch className="text-2xl hover:cursor-pointer" />
              </div>
              {/* login */}
              <div className="hover:cursor-pointer">Login</div>
            </div>
          </div>
        </nav>

        {/* nav bar for mobile */}
        <div>
          <div
            className={`grid grid-cols-2 grid-flow-col ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <nav
              id="navLinks"
              className={`grid  grid-rows-4 grid-flow-col p-4 md:hidden`}
            >
              <NavLink style={navIsActive} to={"/"}>
                Home
              </NavLink>
              <NavLink style={navIsActive} to={"categories"}>
                Categories
              </NavLink>
              <NavLink style={navIsActive} to={"blogs"}>
                Blog
              </NavLink>
              <NavLink style={navIsActive} to={"contact-us"}>
                Contact Us
              </NavLink>
            </nav>
            <div className="md:hidden flex justify-center gap-5 items-center ">
              {/* searchIcon */}
              <div className="">
                <CiSearch className="text-2xl hover:cursor-pointer" />
              </div>
              {/* login */}
              <div className="hover:cursor-pointer">Login</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
