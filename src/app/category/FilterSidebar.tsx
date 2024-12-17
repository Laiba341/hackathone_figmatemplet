import React from 'react'

const FilterSidebar = () => (
    <aside className="w-80 h-full p-6 border-r bg-white">
      {/* Car Type Filter */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Type</h3>
        <ul className="space-y-4">
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <li key={type} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={type}
                className="h-5 w-5 accent-blue-600"
              />
              <label
                htmlFor={type}
                className="text-gray-700 text-base cursor-pointer"
              >
                {type}
              </label>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Capacity Filter */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Capacity</h3>
        <ul className="space-y-4">
          {["2 Person (10)", "4 Person (14)", "6 Person (12)", "8 or More (16)"].map((cap) => (
            <li key={cap} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={cap}
                className="h-5 w-5 accent-blue-600"
              />
              <label
                htmlFor={cap}
                className="text-gray-700 text-base cursor-pointer"
              >
                {cap}
              </label>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Price Range Filter */}
      <div>
        <h3 className="font-bold text-lg mb-4 text-gray-800">Price Range</h3>
        <div className="flex flex-col space-y-4">
          <input
            type="range"
            min="0"
            max="500"
            defaultValue="250"
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-gray-700 text-sm">
            <span>$0</span>
            <span>$500</span>
          </div>
        </div>
      </div>
    </aside>
  );
  
  export default FilterSidebar;
  
