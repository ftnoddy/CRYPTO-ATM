import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h5 className="text-2xl font-bold">Crypto Selling</h5>
          <p className="text-sm mt-2">&copy; 2024 Crypto Selling. All rights reserved.</p>
        </div>
        <div className="text-center">
          <nav className="flex flex-col md:flex-row justify-center md:justify-start gap-2 sm:gap-4 mb-4 md:mb-0">
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
              Refund/Return & Cancellation
            </Link>
            <Link to="/terms-conditions" className="text-sm hover:underline underline-offset-4">
              Terms & Conditions
            </Link>
            <Link to="/shipping-policies" className="text-sm hover:underline underline-offset-4">
              Shipping Policies
            </Link>
          </nav>
        </div>
        <div className="flex justify-center md:justify-end gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
