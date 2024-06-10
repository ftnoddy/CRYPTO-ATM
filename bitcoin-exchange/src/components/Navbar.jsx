import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userLogo from '../assets/user.png'; 
import logoutLogo from "../assets/logout.png";
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";
import detectEthereumProvider from '@metamask/detect-provider';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUser(JSON.parse(storedUserInfo));
    }
  }, [setUser]);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/logout');
      localStorage.removeItem('userInfo');
      setUser(null);
      setWalletAddress(null); // Clear wallet address on logout
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleConnectWallet = async () => {
    if (walletAddress) {
      // If wallet is already connected, disconnect it
      setWalletAddress(null);
      setUser(prev => ({ ...prev, walletAddress: null }));
    } else {
      // Connect to MetaMask
      const provider = await detectEthereumProvider();

      if (provider) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          setWalletAddress(account);
          setUser(prev => ({ ...prev, walletAddress: account }));
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask is not installed. Please install MetaMask and try again.');
      }
    }
  };

  return (
    <header className="bg-purple-300 p-5 mb-4 rounded-2xl sticky top-0">
      <div className="flex items-center">
        <a href="/">
          <h1 className="font-bold text-[22px] lg:text-3xl uppercase pr-2 mr-2 border-r-2 border-purple-500 lg:pr-5 lg:mr-5">
            Bitcoin
          </h1>
        </a>
        <span className="mr-2 lg:hidden" onClick={() => setNav(!nav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </span>
        <div className="hidden lg:flex ml-auto uppercase font-bold">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "rgb(107, 33, 168)" : "#000",
              textDecoration: "none",
            })}
          >
            <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
              Home
            </li>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "rgb(107, 33, 168)" : "#000",
              textDecoration: "none",
            })}
          >
            <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
              About
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "rgb(107, 33, 168)" : "#000",
              textDecoration: "none",
            })}
          >
            <li className="mr-5 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
              Contact
            </li>
          </NavLink>
        </div>
        <button
          onClick={handleConnectWallet}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-purple-700 focus:outline-none"
        >
          {walletAddress ? 'Disconnect Wallet' : 'Connect Wallet'}
        </button>
        {walletAddress && (
          <div className="ml-4 text-purple-700 font-bold">
            {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
          </div>
        )}
        <div className="relative ml-4">
          <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer">
            {user && user.name ? (
              <div className="flex items-center">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {user.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
            ) : (
              <img src={userLogo} alt="User Profile" className="w-8 h-8 rounded-full" />
            )}
          </span>
          {dropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              <ul className="py-1">
                {!user ? (
                  <>
                    <NavLink to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Login/Signup
                    </NavLink>
                    <NavLink to="/kyc" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Complete KYC
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/order-history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Order History
                    </NavLink>
                    <div className="border-t border-gray-200 my-2"></div>
                    <button onClick={handleLogout} className="px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left flex items-center">
                      <img src={logoutLogo} alt="Logout" className="w-5 h-5 mr-2" />
                      Logout
                    </button>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      {nav && (
        <div
          id="menu"
          className="mt-5 p-5 bg-white border-2 border-purple-500 rounded-2xl"
          onClick={() => setNav(!nav)}
        >
          <ul className="font-bold">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">About</li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="hover:text-purple-500">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
