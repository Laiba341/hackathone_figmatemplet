import React from 'react';
import './hero.css'; // Path to your CSS file

const Hero = () => {
  return (
    <div>
      {/* Upper Section: Two cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 mr-2">
        
        {/* Left Card */}
        <div className="bg-[#54A6FF] rounded-lg p-8 w-full lg:w-[48%] shadow-lg mt-10 relative overflow-hidden">
          {/* Chevron Background */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_20px,transparent_20px,transparent_40px)] opacity-10"></div>
          
          {/* Content */}
          <h1 className="text-4xl font-bold text-white mb-2 relative z-10">
            The Best Platform <br /> for Car Rental
          </h1>
          <p className="text-white mt-5 text-2xl relative z-10">
            Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
          </p>
          {/* Button */}
          <button className="bg-[#3563E9] text-white px-12 py-4 rounded-md mt-4 relative z-10">
            Rental Car
          </button>
          {/* Car Image */}
          <div className="flex justify-center w-full mt-4 relative z-10">
            <img
              src="/images/card.png"
              alt="White Sports Car"
              className="max-w-full object-contain h-[200px] w-[300px]" // Ensure consistent size
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#3563E9] rounded-lg p-8 w-full lg:w-[48%] shadow-lg mt-10 relative overflow-hidden">
          {/* Chevron Background */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_20px,transparent_20px,transparent_40px)] opacity-10"></div>
          
          {/* Content */}
          <h1 className="text-4xl font-bold text-white mb-2 relative z-10">
            Easy way to rent a <br /> car at a low price
          </h1>
          <p className="text-white mt-5 text-2xl relative z-10">
            Providing cheap car rental services <br /> and safe and comfortable facilities.
          </p>
          {/* Button */}
          <button className="bg-[#54A6FF] text-white px-12 py-4 rounded-md mt-4 relative z-10">
            Rental Car
          </button>
          {/* Car Image */}
          <div className="flex justify-center w-full mt-4 relative z-10">
            <img
              src="/images/three.png"
              alt="Silver Sports Car"
              className="max-w-full object-contain h-[200px] w-[300px]" // Ensure consistent size
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
