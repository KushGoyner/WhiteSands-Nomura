import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [showInitiatives, setShowInitiatives] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

    {/* LOGO on the left */}
    <div className="text-xl font-bold text-red-600">
      LOGO
    </div>

    {/* Menu on the right */}
    <ul className="flex items-center space-x-6 text-sm font-semibold">
      <li className="text-red-600 cursor-pointer hover:text-red-800">HOME</li>

      {/* Initiatives Dropdown */}
      <li
        className="relative cursor-pointer"
        onMouseEnter={() => setShowInitiatives(true)}
        onMouseLeave={() => setShowInitiatives(false)}
      >
        <span className="hover:text-red-600 text-black flex items-center gap-1">
          INITIATIVES <FaChevronDown className="text-xs mt-1" />
        </span>
        {showInitiatives && (
          <div className="absolute top-full left-0 bg-white shadow-md border mt-1 w-48 py-2 z-10">
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ongoing Initiatives</p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Past Initiatives</p>
          </div>
        )}
      </li>

      <li className="hover:text-red-600 cursor-pointer">ABOUT US</li>

      {/* Gallery Dropdown */}
      <li
        className="relative cursor-pointer"
        onMouseEnter={() => setShowGallery(true)}
        onMouseLeave={() => setShowGallery(false)}
      >
        <span className="hover:text-red-600 text-black flex items-center gap-1">
          GALLERY <FaChevronDown className="text-xs mt-1" />
        </span>
        {showGallery && (
          <div className="absolute top-full left-0 bg-white shadow-md border mt-1 w-48 py-2 z-10">
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">News Articles</p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Volunteer Blogs</p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Photo Gallery</p>
          </div>
        )}
      </li>

      <li className="hover:text-red-600 cursor-pointer">VOLUNTEER</li>
      <li className="hover:text-red-600 cursor-pointer">NEWSLETTER</li>
      <li className="hover:text-red-600 cursor-pointer">BLOGS</li>
      <li className="hover:text-red-600 cursor-pointer">CONTACT</li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
