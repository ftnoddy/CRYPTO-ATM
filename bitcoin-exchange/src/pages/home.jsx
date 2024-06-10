import React from 'react';
import { useNavigate } from 'react-router-dom';
import bitcoinLogo from '../assets/bitcoin.png';

const Home = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate('/buy');
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-40 backdrop-blur-md shadow-md rounded-2xl p-8 max-w-4xl mx-auto text-center animate-fade-in">
        <img
          src={bitcoinLogo}
          alt="Bitcoin Logo"
          className="w-24 mx-auto mb-4 animate-bounce"
        />
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to Bitcoin Exchange</h1>
        <p className="text-lg text-gray-900 mb-6">
          Buy and sell Bitcoin easily and securely. Join millions of users who trust us for their cryptocurrency transactions.
        </p>
        <p className="text-md text-gray-900 mb-6">
          Our platform provides a seamless experience from signup to transaction completion. Get started by creating an account, completing KYC, and making your first purchase.
        </p>
        <p className="text-md text-gray-900">
          Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
        </p>
        <button
          onClick={handleBuyClick}
          className="mt-4 bg-purple-500 text-white rounded-md py-2 px-4"
        >
          BUY BTC
        </button>
      </div>
    </div>
  );
};

export default Home;
