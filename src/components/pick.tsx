import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IoSwapVertical } from "react-icons/io5";

const Pick = () => {
  return (
    <div className="mt-10 flex items-center gap-6 px-10">
      {/* Pick-Up Section */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-[#3563E9] font-bold mb-2">Pick-Up</h3>
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <label className="text-sm text-[#596780]">Locations</label>
            <input
              type="text"
              placeholder="Select your city"
              className="w-full border rounded-lg p-2 mt-1 pr-10"
            />
            <AiOutlineDown 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#596780] mt-4"
            
            />
          </div>
          <div className="flex-1 relative">
            <label className="text-sm text-[#596780]">Date</label>
            <input
              type="text"
              placeholder="Select your Date"
              className="w-full border rounded-lg p-2 mt-1 pr-10"
            />
            <AiOutlineDown 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#596780] mt-5px mb-5px mt-4"
          
            />
          </div>
          <div className="flex-1 relative">
            <label className="text-sm text-[#596780]">Time</label>
            <input
              type="text"
              placeholder="Select your Time"
              className="w-full border rounded-lg p-2 mt-1 pr-10"
            />
            <AiOutlineDown 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#596780] mt-4"
             
            />
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex-shrink-0">
        <button className="bg-[#3563E9] text-white p-4 h-30 mx-4 w-30 rounded-md ">
          <IoSwapVertical className="font-bold" />
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-[#3563E9] font-bold mb-2">Drop-Off</h3>
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <label className="text-sm text-[#596780]">Locations</label>
            <input
              type="text"
              placeholder="Select your city"
              className="w-full border rounded-lg p-2 mt-1 pr-10"
            />
            <AiOutlineDown 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#596780] mt-4"
            
            />
          </div>
          <div className="flex-1 relative">
            <label className="text-sm text-[#596780]">Date</label>
            <input
              type="text"
              placeholder="Select your Date"
              className="w-full border rounded-lg p-2 mt-1 pr-10"
            />
            <AiOutlineDown 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#596780] mt-4"
           
            />
          </div>
          <div className="flex-1 relative">
            <label className="text-sm text-[#596780]">Time</label>
            <input
              type="text"
              placeholder="Select your Time"
              className="w-full border rounded-lg p-2 mt-1 pr-10"
            />
            <AiOutlineDown 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#596780] mt-4"
            
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
