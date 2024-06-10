import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
import BTC from '../assets/bitcoin.png';
import ETH from '../assets/ethereum.png';
import BNB from '../assets/bnb.png';
import USDT from '../assets/usdt.png';
import cryptoLogo from "../assets/cryptologo.png";
import Crypto1 from "../assets/pngegg (1).png";
import Crypto2 from "../assets/pngegg (2).png";
import Crypto3 from "../assets/pngegg (3).png";
import ConnectWallet from '../components/connectWallet';

const Buy = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [cryptoType, setCryptoType] = useState('BTC');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/buy-crypto', { walletAddress, amount, cryptoType, email });
      toast.success('Order placed successfully. Please check your email for payment instructions.');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error placing order', error);
      toast.error('Failed to place order');
    }
  };

  const cryptoOptions = [
    { value: 'BTC', label: 'Bitcoin (BTC)', logo: BTC },
    { value: 'ETH', label: 'Ethereum (ETH)', logo: ETH },
    { value: 'USDT', label: 'Tether USD (USDT)', logo: USDT },
    { value: 'BNB', label: 'Binance Coin (BNB)', logo: BNB },
  ];

  const handleWalletConnected = (address) => {
    setWalletAddress(address);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex justify-center items-center overflow-hidden">
      <img src={Crypto1} alt="Crypto1" className="absolute top-10 left-10 w-20 h-20 lg:w-40 lg:h-40 opacity-30 animate-pulse" />
      <img src={Crypto2} alt="Crypto2" className="absolute bottom-20 right-20 w-20 h-20 lg:w-40 lg:h-40 opacity-30 animate-pulse" />
      <img src={Crypto3} alt="Crypto3" className="absolute top-10 right-10 w-20 h-20 lg:w-40 lg:h-40 opacity-30 animate-pulse" />
      <img src={Crypto3} alt="Crypto4" className="absolute bottom-20 left-10 w-20 h-20 lg:w-40 lg:h-40 opacity-30 animate-pulse" />

      <div className="relative z-10 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-2xl p-8 max-w-lg mx-auto w-full md:w-2/3 lg:w-1/3">
        <img
          src={cryptoLogo}
          alt="Crypto Logo"
          className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-6 animate-bounce"
        />
        
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Buy Cryptocurrency</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <ConnectWallet onWalletConnected={handleWalletConnected} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="walletAddress" className="block mb-2 text-lg text-gray-700">Wallet Address</label>
              <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cryptoType" className="block mb-2 text-lg text-gray-700">Cryptocurrency</label>
              <div className="relative">
                <select
                  id="cryptoType"
                  name="cryptoType"
                  value={cryptoType}
                  onChange={(e) => setCryptoType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-3 text-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {cryptoOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {cryptoType === 'BTC' && <img src={BTC} alt="BTC" className="w-6 h-6" />}
                  {cryptoType === 'ETH' && <img src={ETH} alt="ETH" className="w-6 h-6" />}
                  {cryptoType === 'USDT' && <img src={USDT} alt="USDT" className="w-6 h-6" />}
                  {cryptoType === 'BNB' && <img src={BNB} alt="BNB" className="w-6 h-6" />}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="amount" className="block mb-2 text-lg text-gray-700">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white rounded-md font-bold py-3 text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            BUY
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buy;
