import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h5 className="text-xl font-bold">Crypto Selling</h5>
          <p className="text-sm">&copy; 2024 Crypto Selling. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-2 sm:gap-4">
          <Link to="/about" className="text-sm hover:underline underline-offset-4">
            About Us
          </Link>
          <Link to="/privacy-policies" className="text-sm hover:underline underline-offset-4">
            Privacy & Policies
          </Link>
          <Link to="/kyc-details" className="text-sm hover:underline underline-offset-4">
            KYC Details
          </Link>
          <Link to="/refund-return-policies" className="text-sm hover:underline underline-offset-4">
            Refund & Return Policies
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:text-gray-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
