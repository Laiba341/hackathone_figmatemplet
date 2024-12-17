"use client"; // Mark this file as a client component

import React from "react";
import { FcLike } from "react-icons/fc";
import { BsFillFuelPumpDieselFill, BsPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { useRouter } from "next/navigation";

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
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    price: "$99.00/day",
    image: "/images/card.png",
    capacity: "2 People",
    fuelCapacity: "90L",
    transmission: "Manual",
  },
  {
    id: 2,
    name: "NissanGT-R",
    type: "Sports",
    price: "$80.00/day",
    image: "/images/three.png",
    capacity: "2 People",
    fuelCapacity: "80L",
    transmission: "Automatic",
  },
  {
    id: 3,
    name: "Rolls-Roys",
    type: "Sedan",
    price: "$96.00/day",
    image: "/images/blue.png",
    capacity: "4 People",
    fuelCapacity: "70L",
    transmission: "Manual",
  },
  {
    id: 4,
    name: "NissanGT-R",
    type: "Sports",
    price: "$80.00/day",
    image: "/images/three.png",
    capacity: "2 People",
    fuelCapacity: "80L",
    transmission: "Automatic",
  },
  {
    id: 5,
    name: "AllNew Rush",
    type: "SUV",
    price: "$72.00/day",
    image: "/images/car5.png",
    capacity: "6 People",
    fuelCapacity: "70L",
    transmission: "Manual",
  },
  {
    id:6,
    name: "CR -V",
    type: "SUV",
    price: "$80.00/day",
    image: "/images/suv 4.png",
    capacity: "6 People",
    fuelCapacity: "80L",
    transmission: "Automatic",
  },
  {
    id: 7,
    name: "AllNew Terios",
    type: "Sport",
    price: "$74.00/day",
    image: "/images/suv.png",
    capacity: "6 People",
    fuelCapacity: "90L",
    transmission: "Manual",
  },
  {
    id: 8,
    name: "CR -V",
    type: "SUV",
    price: "$80.00/day",
    image: "/images/black.png",
    capacity: "6 People",
    fuelCapacity: "80L",
    transmission: "Automatic",
  },
  {
    id: 9,
    name: "MGZX Exclusice",
    type: "Hatchback",
    price: "$76.00/day",
    image: "/images/card 9.png",
    capacity: "4 People",
    fuelCapacity: "70L",
    transmission: "Manual",
  },
  {
    id: 10,
    name: "New MGZS",
    type: "SUV",
    price: "$80.00/day",
    image: "/images/car5.png",
    capacity: "6 People",
    fuelCapacity: "80L",
    transmission: "A utomatic",
  },
  {
    id: 11,
    name: "MGZX Excite",
    type: "Hatchback",
    price: "$74.00/day",
    image: "/images/card 9.png",
    capacity: "4 People",
    fuelCapacity: "90L",
    transmission: "Manual",
  },
  {
    id: 12,
    name: "New MGZS",
    type: "SUV",
    price: "$80.00/day",
    image: "/images/car5.png",
    capacity: "6 People",
    fuelCapacity: "80L",
    transmission: "A utomatic",
  },
  // Add more cars here as needed
];

const RentCarCardList: React.FC = () => {
  const router = useRouter();
  const popularCars = carData.slice(0, 4); // First 4 cars
  const recommendationCars = carData.slice(4); // Remaining cars

  const renderCarCard = (car: any) => (
    <div
      key={car.id}
      className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-[400px]"
    >
      {/* Like Icon */}
      <div className="absolute top-4 right-4">
        <FcLike className="text-2xl cursor-pointer" />
      </div>

      {/* Car Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
        <p className="text-gray-400 text-sm">{car.type}</p>
      </div>

      {/* Car Image */}
      <div className="h-36 flex justify-center items-center">
        <img
          src={car.image}
          alt={car.name}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Details */}
      <div className="px-4 py-2 text-gray-500 text-sm flex justify-between mt-6">
        <div className="flex items-center space-x-1">
          <BsFillFuelPumpDieselFill />
          <span>{car.fuelCapacity}</span>
        </div>
        <div className="flex items-center space-x-1">
          <TbSteeringWheel />
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center space-x-1">
          <BsPeopleFill />
          <span>{car.capacity}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-4">
        <span className="text-blue-600 font-bold text-lg">{car.price}</span>
        <button
        onClick={() => router.push('/Form')}
  className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
>
  Rent Now
</button>
      </div>
    </div>
  );

  return (
    <div className="px-10 mt-10">
      {/* Popular Cars Section */}
      <h1 className="text-slate-600 text-2xl font-semibold mb-6">Popular Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {popularCars.map(renderCarCard)}
      </div>

      {/* Recommendation Cars Section */}
      <h1 className="text-slate-600 text-2xl font-semibold mt-12 mb-6">
        Recommendation Cars
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recommendationCars.map(renderCarCard)}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-16 mb-16">
      <button
  onClick={() => router.push('/category')}
  className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
>
  Show More
</button>

      </div>
    </div>
  );
};

export default RentCarCardList;