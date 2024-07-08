import React, { useState } from 'react';
import CountUp from 'react-countup';
import usersLogo from "../assets/friends.png";
import kycUsers from "../assets/man.png";
import ordersLogo from "../assets/infrastructure.png";
import GetTotalUsers from './GetTotalUsers';
import GetKycUsers from './kycUsersPage';
import GetTotalOrders from './getTotalOrders';
import ConnectWallet from '../components/connectWallet';
import SendCrypto from './sendCrypto';
// import { toast } from 'react-toastify';

const AdminUserPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [showSendCrypto, setShowSendCrypto] = useState(false);

  const handleWalletConnected = (address) => {
    setWalletAddress(address);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'total-users':
        return <GetTotalUsers />;
      case 'kyc-users':
        return <GetKycUsers />;
      case 'total-orders':
        return <GetTotalOrders />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div 
          onClick={() => setSelectedSection('total-users')} 
          className="p-4 bg-gray-100 rounded shadow cursor-pointer flex flex-col items-center"
        >
          <img src={usersLogo} alt="total users" className="mb-2 w-16 h-16" />
          <h2 className="text-center text-xl">Total Users</h2>
          <p className="text-center text-2xl">
            <CountUp end={100} duration={2.5} />
          </p>
        </div>
        <div 
          onClick={() => setSelectedSection('kyc-users')} 
          className="p-4 bg-gray-100 rounded shadow cursor-pointer flex flex-col items-center"
        >
          <img src={kycUsers} alt="kyc users" className="mb-2 w-16 h-16" />
          <h2 className="text-center text-xl">KYC Users</h2>
          <p className="text-center text-2xl">
            <CountUp end={80} duration={2.5} />
          </p>
        </div>
        <div 
          onClick={() => setSelectedSection('total-orders')} 
          className="p-4 bg-gray-100 rounded shadow cursor-pointer flex flex-col items-center"
        >
          <img src={ordersLogo} alt="total orders" className="mb-2 w-16 h-16" />
          <h2 className="text-center text-xl">Total Orders</h2>
          <p className="text-center text-2xl">
            <CountUp end={150} duration={2.5} />
          </p>
        </div>
      </div>

      {renderSection()}

      <div className="mt-8">
        <ConnectWallet onWalletConnected={handleWalletConnected} />
        {walletAddress && (
          <div className="mt-4 p-4 bg-gray-100 rounded shadow">
            <button
              onClick={() => setShowSendCrypto(!showSendCrypto)}
              className="bg-purple-500 text-white rounded-md px-6 py-2 font-bold transition-transform transform hover:scale-105"
            >
              {showSendCrypto ? 'Hide Send Crypto' : 'Show Send Crypto'}
            </button>
            {showSendCrypto && <SendCrypto walletAddress={walletAddress} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUserPage;
