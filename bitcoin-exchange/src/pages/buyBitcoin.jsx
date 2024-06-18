import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
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
  const [cryptoPrices, setCryptoPrices] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd');
        setCryptoPrices({
          BTC: response.data.bitcoin.usd,
          ETH: response.data.ethereum.usd,
          BNB: response.data.binancecoin.usd,
          USDT: response.data.tether.usd
        });
      } catch (error) {
        console.error('Error fetching cryptocurrency prices', error);
      }
    };

    fetchCryptoPrices();

    const interval = setInterval(fetchCryptoPrices, 60000);

    return () => clearInterval(interval);
  }, []);

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

  const calculateTotal = () => {
    const amountNumber = parseFloat(amount) || 0;
    const platformCharge = amountNumber * 0.08;
    const charge1 = amountNumber * 0.07;
    const charge2 = amountNumber * 0.06;
    return amountNumber + platformCharge + charge1 + charge2;
  };

  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex justify-center items-center overflow-hidden">
        <img src={Crypto1} alt="Crypto1" className="absolute top-10 left-10 w-20 lg:w-40 opacity-30 animate-pulse" />
        <img src={Crypto2} alt="Crypto2" className="absolute bottom-20 right-20 w-20 lg:w-40 opacity-30 animate-pulse" />
        <img src={Crypto3} alt="Crypto3" className="absolute top-10 right-10 w-20 lg:w-40 opacity-30 animate-pulse" />
        <img src={Crypto3} alt="Crypto4" className="absolute bottom-20 left-10 w-20 lg:w-40 opacity-30 animate-pulse" />

        <div className="relative z-10 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-2xl p-4 md:p-6 lg:p-8 max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto w-full">
          <img
            src={cryptoLogo}
            alt="Crypto Logo"
            className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 animate-bounce"
          />

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 text-center">Buy Cryptocurrency</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <form onSubmit={handleSubmit} className="space-y-4 text-sm md:text-base">
              <ConnectWallet onWalletConnected={handleWalletConnected} />
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="walletAddress" className="block mb-2 text-gray-700">Wallet Address</label>
                  <input
                    type="text"
                    id="walletAddress"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 md:p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 md:p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cryptoType" className="block mb-2 text-gray-700">Cryptocurrency</label>
                  <div className="relative">
                    <select
                      id="cryptoType"
                      value={cryptoType}
                      onChange={(e) => setCryptoType(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 md:p-3 text-sm md:text-base appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {cryptoOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      {cryptoType === 'BTC' && <img src={BTC} alt="BTC" className="w-4 h-4 md:w-6 md:h-6" />}
                      {cryptoType === 'ETH' && <img src={ETH} alt="ETH" className="w-4 h-4 md:w-6 md:h-6" />}
                      {cryptoType === 'USDT' && <img src={USDT} alt="USDT" className="w-4 h-4 md:w-6 md:h-6" />}
                      {cryptoType === 'BNB' && <img src={BNB} alt="BNB" className="w-4 h-4 md:w-6 md:h-6" />}
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="amount" className="block mb-2 text-gray-700">Amount</label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 md:p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white rounded-md font-bold py-2 md:py-3 text-sm md:text-base transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                BUY
              </button>
            </form>
            <div className="bg-gray-100 rounded-md p-4 md:p-6 text-sm md:text-base text-gray-800">
              <h3 className="font-bold mb-2">Charges</h3>
              <p>Platform Charge (8%): ${(parseFloat(amount) * 0.08).toFixed(2)}</p>
              <p>Charge 1 (7%): ${(parseFloat(amount) * 0.07).toFixed(2)}</p>
              <p>Charge 2 (6%): ${(parseFloat(amount) * 0.06).toFixed(2)}</p>
              <p className="font-bold mt-2">Total Amount: ${calculateTotal().toFixed(2)}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/crypto-charts')}
            className="w-full bg-blue-500 text-white rounded-md font-bold py-2 md:py-3 text-sm md:text-base mt-4 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View Crypto Charts
          </button>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
              Supported Cryptocurrencies
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Trade the Top Cryptocurrencies</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Buy and sell Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), and Tether (USDT) on our secure and user-friendly platform.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
            {cryptoOptions.map((option) => (
              <div key={option.value} className="flex flex-col items-center justify-center space-y-4">
                <img src={option.logo} alt={option.label} className="h-12 w-12" />
                <div className="space-y-1 text-center">
                  <h4 className="text-xl font-bold">{option.label}</h4>
                  <p className="text-gray-500 dark:text-gray-400">Live Price: ${cryptoPrices[option.value]}</p>
                  <p className="text-gray-500 dark:text-gray-400">Buy and Sell</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
