import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ConnectWallet = ({ onWalletConnected }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        onWalletConnected(accounts[0]);  // Call the callback function with the wallet address
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      toast.error('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={connectWalletHandler}
        className="bg-purple-500 text-white rounded-md px-6 py-2 font-bold transition-transform transform hover:scale-105"
      >
        Connect Wallet
      </button>
      {walletAddress && (
        <div className="mt-4 p-2 bg-white border-2 border-purple-500 rounded-md text-center">
          <p className="font-semibold">Connected Wallet Address:</p>
          <p className="break-all">{walletAddress}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
