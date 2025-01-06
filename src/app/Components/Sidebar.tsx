import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#ffffff] w-full h-[1400px] sm:w-[330px]  p-6">
      {/* Type Section */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">TYPE</h2>
        <div className="space-y-2">
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> Sport (10)
          </label>
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> SUV (12)
          </label>
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> MPV (16)
          </label>
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> Sedan(20)
          </label>

          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> Coupe(14)
          </label>
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> Hatchback (14)
          </label>
        </div>
      </div>

      {/* Capacities Section */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">CAPACITY</h2>
        <div className="space-y-2">
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> 2 person (10)
          </label>
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> 4 person (14)
          </label>
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> 6 person (12)
          </label>
          <label className="flex items-center text-black">
            <input type="checkbox" className="mr-2" /> 8 or More (16)
          </label>
        </div>
      </div>

      {/* Price Slider Section */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">Price</h2>
        <div>
          <input
            type="range"
            min="100"
            max="1000"
            value="500"
            className="w-full bg-blue-500"
          />
          <div className="flex justify-between text-black mt-2">
            <span>Max. $100.00</span>
      
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
