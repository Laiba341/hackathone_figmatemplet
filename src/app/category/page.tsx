import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BsFillFuelPumpDieselFill } from 'react-icons/bs';
import { TbSteeringWheel } from 'react-icons/tb';
import { BsPeopleFill } from 'react-icons/bs';
import Pick from '@/components/pick';
import FilterSidebar from "../category/FilterSidebar";

type Car = {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
  capacity: string; // Number of people
  fuelCapacity: string; // Fuel capacity (e.g., "90L")
  transmission: string; // Transmission type (e.g., "Manual" or "Automatic")
};

const carData: Car[] = [
  { id: 1, name: "Koenigsegg", type: "Sport", price: "$99.00/day", image: "/images/card.png", capacity: "2 People", fuelCapacity: "90L", transmission: "Manual" },
  { id: 2, name: "NissanGT-R", type: "Sports", price: "$80.00/day", image: "/images/three.png", capacity: "2 People", fuelCapacity: "80L", transmission: "Automatic" },
  { id: 3, name: "Rolls-Royce", type: "Sedan", price: "$96.00/day", image: "/images/blue.png", capacity: "4 People", fuelCapacity: "70L", transmission: "Manual" },
  { id: 4, name: "AllNew Rush", type: "SUV", price: "$72.00/day", image: "/images/car5.png", capacity: "6 People", fuelCapacity: "70L", transmission: "Manual" },
  { id: 5, name: "CR-V", type: "SUV", price: "$80.00/day", image: "/images/suv 4.png", capacity: "6 People", fuelCapacity: "80L", transmission: "Automatic" },
  { id: 6, name: "AllNew Terios", type: "Sport", price: "$74.00/day", image: "/images/suv.png", capacity: "6 People", fuelCapacity: "90L", transmission: "Manual" },
  { id: 7, name: "MGZX Exclusive", type: "Hatchback", price: "$76.00/day", image: "/images/card 9.png", capacity: "4 People", fuelCapacity: "70L", transmission: "Manual" },
  { id: 8, name: "New MGZS", type: "SUV", price: "$80.00/day", image: "/images/card10.png", capacity: "6 People", fuelCapacity: "80L", transmission: "Automatic" },
  { id: 9, name: "MGZX Excite", type: "Hatchback", price: "$74.00/day", image: "/images/card 9.png", capacity: "4 People", fuelCapacity: "90L", transmission: "Manual" },
];

const RentCarCardList: React.FC = () => {
  return (
    <div className="px-10 mt-10 flex">
      {/* Sidebar Section */}
      <div className="w-[20%]">
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="w-full pl-6">
        {/* Pick Section */}
        <div className="mb-8">
          <Pick />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-8">
          {carData.map((car) => (
            <div
              key={car.id}
              className="max-w-[280px] bg-white rounded-lg shadow-lg p-4"
            >
              {/* Header Section */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{car.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{car.type}</p>
                </div>
                <FcLike className="text-2xl" />
              </div>

              {/* Image Section */}
              <div className="h-36 flex justify-center items-center">
              <img
                src={car.image}
                alt={car.name}
                className="object-contain w-220 h-68"
              />
            </div>

              {/* Info Section */}
              <div className="flex justify-between text-gray-500 text-sm ">
                <div className="flex items-center space-x-1">
                  <BsFillFuelPumpDieselFill className="w-4 h-4 " />
                  <span>{car.fuelCapacity}</span>
                </div>
                <div className="flex items-center space-x-1 ">
                  <TbSteeringWheel className="w-4 h-4" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center space-x-1 ">
                  <BsPeopleFill className="w-4 h-4" />
                  <span>{car.capacity}</span>
                </div>
              </div>

              {/* Footer Section */}
              <div className="flex justify-between items-center mt-10">
                <p className="text-lg font-semibold">{car.price}</p>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-10 mb-10">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Show more Cars
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default RentCarCardList;
