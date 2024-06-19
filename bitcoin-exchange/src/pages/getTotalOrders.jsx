import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTotalOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/get-order');
        setOrders(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="text-zinc-500">Admin / Orders</span>
        <span className="ml-4 text-zinc-500">Total: {orders.length}</span>
      </div>
      <table className="min-w-full bg-white dark:bg-zinc-800">
        <thead>
          <tr className="w-full border-b">
            <th className="p-2 text-left">Wallet Address</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Cryptocurrency Type</th>
            <th className="p-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr className="border-b" key={order._id}>
              <td className="p-2">{order.walletAddress}</td>
              <td className="p-2">{order.email}</td>
              <td className="p-2">{order.cryptoType}</td>
              <td className="p-2">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetTotalOrders;
