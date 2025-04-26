import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mt-0 bg-gradient-to-r from-white-600 to-white-400  shadow-lg max-w-scree  px-0 py-0 ">
      <div className=" mt-1 flex  items-center justify-between w-full">
        
        {/* LEFT SIDE: Logo */}
        <div>
          <h1 className="text-3xl pl-4 font-extrabold text-blue-600 tracking-wide ">
            VK Hospitals
          </h1>
        </div>

        {/* RIGHT SIDE: Nav Links + Auth Buttons */}
        <div className="flex items-center gap-10">
          {/* Nav Links */}
          <div className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-blue-400 text-lg font-medium hover:text-yellow-300 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-blue-400 text-lg font-medium hover:text-yellow-300 transition duration-200"
            >
              Doctors
            </Link>
           
            <Link
              to="/contact"
              className="text-blue-400 text-lg font-medium hover:text-yellow-300 transition duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4">
          <Link
    to="/login"
    className= " mt-1 bg-blue-600 mb-2 h-10 text-white w-28 py-0 text-lg rounded-full font-medium flex items-center justify-center hover:bg-blue-700 transition duration-200"
  >
    Login
  </Link>

  <Link
    to="/signup"
    className= " mt-1 mb-2 bg-yellow-400 h-10 text-blue-900 w-28 py-0 text-lg rounded-2xl font-semibold flex items-center justify-center hover:bg-yellow-300 transition duration-200"
  >
    Sign Up
  </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
