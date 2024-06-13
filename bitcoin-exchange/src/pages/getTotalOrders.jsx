import React from 'react';

const GetTotalOrders = () => {
  // Dummy data
  const orders = [
    {
      walletAddress: '0xAbc...1234',
      email: 'john.doe@example.com',
      cryptocurrencyType: 'Bitcoin (BTC)',
      amount: 1.5,
    },
    {
      walletAddress: '0xDef...5678',
      email: 'jane.smith@example.com',
      cryptocurrencyType: 'Ethereum (ETH)',
      amount: 10,
    },
    {
      walletAddress: '0xGhi...9012',
      email: 'tim.brown@example.com',
      cryptocurrencyType: 'Tether USD (USDT)',
      amount: 500,
    },
    {
      walletAddress: '0xJkl...3456',
      email: 'justin.green@example.com',
      cryptocurrencyType: 'Binance Coin (BNB)',
      amount: 25,
    },
  ];

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
            <tr className="border-b" key={index}>
              <td className="p-2">{order.walletAddress}</td>
              <td className="p-2">{order.email}</td>
              <td className="p-2">{order.cryptocurrencyType}</td>
              <td className="p-2">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetTotalOrders;
