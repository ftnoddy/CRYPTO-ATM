import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import Web3 from 'web3';

const SendCrypto = ({ walletAddress }) => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [balance, setBalance] = useState(null);

  const fetchBalance = useCallback(async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please install MetaMask to use this feature.');
        return;
      }

      const web3 = new Web3(window.ethereum);
      let balance;

      if (selectedCrypto === 'ETH') {
        balance = await web3.eth.getBalance(walletAddress);
      } else if (selectedCrypto === 'BNB') {
        const bscWeb3 = new Web3('https://bsc-dataseed.binance.org/');
        balance = await bscWeb3.eth.getBalance(walletAddress);
      } else {
        toast.info('Selected cryptocurrency is not supported for balance fetching.');
        return;
      }

      setBalance(web3.utils.fromWei(balance, 'ether'));
    } catch (error) {
      console.error('Error fetching balance', error);
      toast.error('Error fetching balance');
    }
  }, [walletAddress, selectedCrypto]);

  useEffect(() => {
    if (walletAddress) {
      fetchBalance();
    }
  }, [walletAddress, selectedCrypto, fetchBalance]);

  const handleSendCrypto = async () => {
    if (!window.ethereum) {
      toast.error('Please install MetaMask to use this feature.');
      return;
    }

    if (!walletAddress) {
      toast.error('Please connect your wallet first.');
      return;
    }

    if (!recipientAddress || !amount) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const transactionParameters = {
        to: recipientAddress,
        from: walletAddress,
        value: web3.utils.toWei(amount, 'ether'), // Convert amount to Wei
      };

      if (selectedCrypto === 'ETH' || selectedCrypto === 'BNB') {
        if (selectedCrypto === 'BNB') {
          transactionParameters.chainId = '0x38'; // BSC mainnet chain ID
        }
        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });
      } else if (selectedCrypto === 'BTC') {
        toast.info('BTC transfers are not supported in this demo.');
      }

      toast.success('Transaction sent!');
    } catch (error) {
      console.error('Error sending transaction', error);
      toast.error('Error sending transaction');
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow-lg">
      <h2 className="text-center text-xl mb-4 text-gray-800 dark:text-gray-200">Send Crypto</h2>
      <div className="flex flex-col items-center">
        <select
          className="mb-2 p-2 border-2 border-purple-500 rounded-md w-full"
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          <option value="ETH">ETH</option>
          <option value="BNB">BNB</option>
          <option value="BTC">BTC</option>
        </select>
        <input
          type="text"
          placeholder="Recipient Wallet Address"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
          className="mb-2 p-2 border-2 border-purple-500 rounded-md w-full"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-2 p-2 border-2 border-purple-500 rounded-md w-full"
        />
        <button
          onClick={handleSendCrypto}
          className="bg-purple-500 text-white rounded-md px-6 py-2 font-bold transition-transform transform hover:scale-105 mb-4"
        >
          Send Crypto
        </button>
        {balance !== null && (
          <div className="mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded text-center w-full">
            <h3 className="text-gray-800 dark:text-gray-200">Balance: {balance} {selectedCrypto}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SendCrypto;
