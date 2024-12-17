import React from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaBitcoin } from "react-icons/fa";


    
    const RentalForm: React.FC = () => {
      return (
        <div className="flex flex-col lg:flex-row  mx-auto gap-6 p-6 bg-gray-100 w-70">
          {/* Left Section (Form) */}
          <div className="flex-1 space-y-6">
            {/* Billing Info */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Billing Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border bg-gray-50 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border bg-gray-50 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full p-2 border bg-gray-50 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Town/City</label>
                  <input
                    type="text"
                    placeholder="Enter your town or city"
                    className="w-full p-2 border bg-gray-50 rounded-md"
                  />
                </div>
              </div>
            </div>
    
            {/* Rental Info */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Rental Info</h2>
              <p className="text-gray-600 mb-4">
                Please select your rental date and location
              </p>
              {/* Pick-Up */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Pick-Up</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700">Location</label>
                    <input
                      type="text"
                      placeholder="Select city"
                      className="w-full p-2 border bg-gray-50 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border bg-gray-50 rounded-md"
                    />
                  </div>
                </div>
                <label className="block text-gray-700">Time</label>
                <input
                  type="text"
                  placeholder="Select your time"
                  className="w-full p-2 border bg-gray-50 rounded-md mb-4"
                />
              </div>
    
              {/* Drop-Off */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Drop-Off</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700">Location</label>
                    <input
                      type="text"
                      placeholder="Select your time"
                      className="w-full p-2 border bg-gray-50 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border bg-gray-50 rounded-md"
                    />
                  </div>
                </div>
                <label className="block text-gray-700">Time</label>
                <input
                  type="text"
                  placeholder="Select city"
                  className="w-full p-2 border bg-gray-50 rounded-md"
                />
              </div>
            </div>
    
            {/* Payment Method */}
            <div className="bg-gray-50 shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
              <p className="text-gray-600 mb-4">Please enter your payment method</p>
              <div className="space-y-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Credit Card</span>
                  <div className="ml-auto flex gap-2 text-2xl text-blue-600">
                    <FaCcVisa />
                    <FaCcMastercard />
                  </div>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Card holder"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                </div>
                <div className="bg-white p-6 rounded-md shadow-md">
                  {/* PayPal Payment Option */}
                  <label className="flex items-center gap-2 bg-slate-100 p-3 rounded-md mb-4">
                    <input
                      type="radio"
                      name="payment"
                      className="border-slate-200 bg-slate-100"
                    />
                    <span>PayPal</span>
                    <FaPaypal className="ml-auto text-2xl text-blue-600" />
                  </label>
    
                  {/* Bitcoin Payment Option */}
                  <label className="flex items-center gap-2 p-3 rounded-md bg-slate-100">
                    <input
                      type="radio"
                      name="payment"
                      className="border-slate-200 bg-slate-100"
                    />
                    <span>Bitcoin</span>
                    <FaBitcoin className="ml-auto text-2xl text-yellow-500" />
                  </label>
                </div>
              </div>
            </div>
            
            {/* Confirmation */}
            <div className="bg-white shadow-md rounded-lg p-6 mt-10">
              <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-2 bg-slate-100 h-16">
                  <input type="checkbox" className="h-5 w-5 ml-3" />
                  <span>
                    I agree with sending marketing and newsletter emails. No spam,
                    promised!
                  </span>
                </label>
                <label className="flex items-center gap-2 bg-slate-100 h-16">
                  <input type="checkbox" className="h-5 w-5 ml-3" />
                  <span>
                    I agree with the terms and conditions and privacy policy.
                  </span>
                </label>
                <button className="w-28 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                  Rent Now
                </button>
                <div className="ml-5 text-gray-500 mt-4">
                  <p>
                    <strong>All your data are safe</strong>
                  </p>
                  <p>We use advanced security to provide the best experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Summary Section */}
          <div className="w-full lg:w-80 bg-white shadow-md rounded-lg p-6 h-auto lg:h-[calc(100vh-30px)]">
            <h2 className="text-2xl font-bold mb-4">Rental Summary</h2>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/box.png"
                alt="Car"
                className="w-20 h-14 rounded-md"
              />
              <div>
                <h3 className="font-bold text-gray-800">Nissan GT - R</h3>
                <p className="text-gray-600">4.8 ⭐ (450 Reviews)</p>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold mt-4">
              <span>Total Rental Price</span>
              <span>$80.00</span>
            </div>
            <button className="w-full mt-4 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>
      );
    };
    
    export default RentalForm;
    