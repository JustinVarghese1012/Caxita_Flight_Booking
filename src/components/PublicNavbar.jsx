import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiPaperPlane } from "react-icons/gi";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger & Close
import { navLinks } from "../constants/constants";

export default function PublicNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
      {/* Logo */}
      <div
        className="cursor-pointer font-extrabold text-xl flex items-center gap-2"
        onClick={() => navigate("/")}
      >
        <GiPaperPlane size={30} className="text-yellow-500"/>
        <span  className="text-blue-900" >Flight Booking</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex ml-auto">
        <div className="menu menu-horizontal px-1 space-x-4 text-blue-800">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="text-lg font-semibold hover:text-yellow-500 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button  */}
      <div className="ml-auto lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 lg:hidden z-50">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)} 
              className="text-lg font-semibold hover:text-gray-400 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
