import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

return (
  <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
  <div className="flex items-center justify-between py-4 md:px-10 px-7">
        
    {/* Logo Section */}
  <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-1 pb-2">
          <IoHome />
          </span>
         <Link to="/" className="hover:text-blue-600">TourNest</Link>
  </div>

    {/* Hamburger Icon (Mobile Only) */}
  <div
    className="text-3xl md:hidden cursor-pointer text-indigo-600"
    onClick={() => setOpen(!open)}>
      {open ? <FaTimes /> : <FaBars />}
  </div>

  {/* Nav Links */}
  <ul
  className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-6 md:pl-0 pl-9 transition-all duration-300 ease-in ${
  open ? "top-16 opacity-100" : "top-[-490px] opacity-0 md:opacity-100"
  }`}>
  <li className="md:ml-8 text-xl md:my-0 my-7">
    <Link to="/home" className="hover:text-gray-600 border-r-2 border-gray-300 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-slate-50">Home</Link>
  </li>
  <li className="md:ml-8 text-xl md:my-0 my-7">
    <Link to="/nearby" className="hover:text-gray-600 border-r-2 border-gray-300 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-slate-50">Near By Attraction</Link>
  </li>
  <li className="md:ml-8 text-xl md:my-0 my-7">
    <Link to="/about" className="hover:text-gray-600 border-r-2 border-gray-300 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-slate-50">About</Link>
  </li>
  <li className="md:ml-8 text-xl md:my-0 my-7">
    <Link to="/contact" className="hover:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-slate-50">Contact</Link>
  </li>
  </ul>
</div>
</nav>
);};

export default Navbar;