import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">IELTS Pro</h1>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Courses</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

