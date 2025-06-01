import React from "react";

const accommodations = ["Rooms", "Mansion", "Countryside", "Villa", "Chalet"];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-2xl font-bold text-teal-600 cursor-pointer">YourLogo</div>
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full md:w-auto px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>
      <div className="space-x-4 flex items-center">
        {accommodations.map((type) => (
          <span key={type} className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm cursor-pointer hover:bg-teal-200">
            {type}
          </span>
        ))}
      </div>
      <div className="ml-6 space-x-4">
        <button className="text-teal-600 hover:underline">Sign In</button>
        <button className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
