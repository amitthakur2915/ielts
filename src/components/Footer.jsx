import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-bold text-white">IELTS Pro</h2>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Courses</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
        <p className="mt-4 md:mt-0 text-sm">© 2025 IELTS Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
