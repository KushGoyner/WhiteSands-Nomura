import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { BiDonateHeart } from "react-icons/bi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const isLoggedIn = true;

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-500"
          >
            WhiteSands
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <Link to="/" className="hover:text-green-500">Home</Link>
            <Link to="/initiatives" className="hover:text-green-500">Initiatives</Link>
            <Link to="/about" className="hover:text-green-500">About Us</Link>
            <Link to="/gallery" className="hover:text-green-500">Gallery</Link>
            <Link to="/blogs" className="hover:text-green-500">Blogs</Link>
            <Link to="/contact" className="hover:text-green-500">Contact</Link>
          </nav>

          {/* Right Side Buttons */}
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
            <>
            <Link
              to="/leaderboard"
              className="px-4 py-1 text-sm rounded border border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-semibold"
            >
              Leaderboard
            </Link>

            <Link
              to="/profile"
              className="p-2 border border-green-100 rounded-full hover:bg-green-50"
              title="Profile"
            >
              <HiOutlineUser className="h-5 w-5 text-green-600" />
            </Link>

            
            </>
          ):(
            <>
                <Link to="/login" className="px-4 py-1 text-sm rounded border border-green-500 text-green-600 hover:bg-green-50 font-semibold">Login</Link>
                <Link to="/register" className="px-4 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600 font-semibold">Register</Link>
              </>
          )}

            <Link
              to="/donate"
              className="flex items-center px-4 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600 font-medium"
            >
              Donate
              <BiDonateHeart className="ml-2 h-5 w-5" />
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleNavDrawer}
              className="md:hidden p-2 text-green-600 hover:text-green-800"
            >
              <HiBars3BottomRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-green-700">Menu</h2>
          <nav className="space-y-4 text-sm font-medium">
            <Link to="/" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/initiatives" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-green-600">Initiatives</Link>
            <Link to="/about" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-green-600">About Us</Link>
            <Link to="/gallery" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-green-600">Gallery</Link>
            <Link to="/blogs" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-green-600">Blogs</Link>
            <Link to="/contact" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-green-600">Contact</Link>
            <Link to="/leaderboard" onClick={toggleNavDrawer} className="block text-yellow-600 font-semibold border-t pt-4 mt-4 hover:text-yellow-700">Leaderboard</Link>
            <Link to="/donate" onClick={toggleNavDrawer} className="block text-green-600 hover:text-green-700">Donate</Link>
            <Link to="/profile" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-green-600">Profile</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
