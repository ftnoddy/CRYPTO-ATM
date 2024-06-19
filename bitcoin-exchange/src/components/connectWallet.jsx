import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ConnectWallet = ({ onWalletConnected }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('MetaMask');

  const connectWalletHandler = async () => {
    if (selectedWallet === 'MetaMask') {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWalletAddress(accounts[0]);
          onWalletConnected(accounts[0]);
        } catch (error) {
          console.error('Error connecting to MetaMask', error);
        }
      } else {
        toast.error('MetaMask is not installed. Please install it to use this feature.');
      }
    } else if (selectedWallet === 'Coinbase') {
      // Coinbase Wallet connection logic
      if (window.coinbaseWalletExtension) {
        try {
          const accounts = await window.coinbaseWalletExtension.request({ method: 'eth_requestAccounts' });
          setWalletAddress(accounts[0]);
          onWalletConnected(accounts[0]);
        } catch (error) {
          console.error('Error connecting to Coinbase Wallet', error);
        }
      } else {
        toast.error('Coinbase Wallet is not installed. Please install it to use this feature.');
      }
    } else if (selectedWallet === 'Trust') {
      // Trust Wallet connection logic
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWalletAddress(accounts[0]);
          onWalletConnected(accounts[0]);
        } catch (error) {
          console.error('Error connecting to Trust Wallet', error);
        }
      } else {
        toast.error('Trust Wallet is not installed. Please install it to use this feature.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <select
        className="mb-4 p-2 border-2 border-purple-500 rounded-md"
        value={selectedWallet}
        onChange={(e) => setSelectedWallet(e.target.value)}
      >
        <option value="MetaMask">MetaMask</option>
        <option value="Coinbase">Coinbase Wallet</option>
        <option value="Trust">Trust Wallet</option>
      </select>
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
