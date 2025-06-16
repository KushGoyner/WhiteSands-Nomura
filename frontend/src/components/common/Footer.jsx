import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            CleanCoast sends newsletters regularly to keep you updated on upcoming drives, educational modules, and environmental progress.
          </p>
          <p className="text-sm text-gray-400 mb-4">Sign up and get the latest updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-3 text-sm rounded-r-md hover:bg-green-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="#" className="hover:text-white">Home</Link></li>
            <li><Link to="#" className="hover:text-white">Events</Link></li>
            <li><Link to="#" className="hover:text-white">Gallery</Link></li>
            <li><Link to="#" className="hover:text-white">Volunteer</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-white">About Us</Link></li>
            <li><Link to="#" className="hover:text-white">FAQs</Link></li>
            <li><Link to="#" className="hover:text-white">Features</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 mb-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-1">Call Us</p>
          <p className="text-sm">
            <FiPhoneCall className="inline-block mr-2 text-green-400" />
            +91 8962842710
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 py-6">
        <p className="text-center text-gray-500 text-sm">©️ 2025, CleanCoast. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
