import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const OrderHistory = () => {
  const { user: userInfo } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (userInfo) {
          const response = await axios.get(`http://localhost:5000/api/users/get-crypto/${userInfo.email}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          });
          setOrders(response.data);
        }
      } catch (error) {
        console.error('Error fetching order history', error);
      }
    };

    fetchOrders();
  }, [userInfo]);

  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center pt-10">
      <div className="bg-white bg-opacity-60 backdrop-blur-md shadow-md rounded-2xl p-8 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-500 text-center">Order History</h2>
        {userInfo && (
          <div className="text-lg mb-8">
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
          </div>
        )}
        <div className="border-2 border-purple-500 rounded-xl p-5 bg-white bg-opacity-60">
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-purple-500">SL NO</th>
                <th className="px-4 py-2 border border-purple-500">Wallet Address</th>
                <th className="px-4 py-2 border border-purple-500">Crypto Token Name</th>
                <th className="px-4 py-2 border border-purple-500">Amount</th>
                <th className="px-4 py-2 border border-purple-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="border border-purple-500">
                  <td className="px-4 py-2 border border-purple-500">{index + 1}</td>
                  <td className="px-4 py-2 border border-purple-500">{order.walletAddress}</td>
                  <td className="px-4 py-2 border border-purple-500">{order.cryptoType}</td>
                  <td className="px-4 py-2 border border-purple-500">{order.amount}</td>
                  <td className="px-4 py-2 border border-purple-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;