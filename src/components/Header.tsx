import React from 'react';
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { IoMdFlower } from "react-icons/io";

export default function Navbar() {
  return (
    // Main Navbar container
    <div className="w-full bg-[#ffff] h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">

      {/* Left Section: Logo and Search Bar */}
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        {/* Logo */}
        <h1 className="text-[#3563e9] text-4xl font-bold">MORENT</h1>

        {/* Search Bar */}
        <div className="input relative w-full md:w-auto">
          <input
            type="text"
            title="search"
            placeholder="Say something here"
            className="border-2 border-[#596780] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12"
          />
          {/* Search Icon inside Search Bar */}
          <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#596780]" />
          {/* Adjustments Icon inside Search Bar */}
          <HiOutlineAdjustments className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#596780]" />
        </div>
      </div>

      {/* Right Section: Icons and Profile */}
      <div className="flex items-center justify-end gap-4 mt-4 md:mt-0">
        {/* Heart Icon */}
        <div className="flex items-center justify-center w-11 h-11 rounded-full border border-[#596780] bg-white">
          <FaHeart className="text-[#596780]" />
        </div>

        {/* Bell Icon with Red Dot */}
        <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-[#596780] bg-white">
          <BsBellFill className="text-[#596780]" />
          {/* Red Dot */}
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* Flower Icon */}
        <div className="flex items-center justify-center w-11 h-11 rounded-full border border-[#596780] bg-white">
          <IoMdFlower className="text-[#596780]" />
        </div>

        {/* Profile Image */}
        <div className="flex items-center justify-center w-11 h-11 rounded-full border border-[#596780] bg-white overflow-hidden">
          <img src="/images/men.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
