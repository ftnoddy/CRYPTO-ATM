import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CryptoCharts = () => {
  const [chartData, setChartData] = useState({
    BTC: null,
    ETH: null,
    BNB: null,
    USDT: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'),
          axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7'),
          axios.get('https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=7'),
          axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=7'),
        ]);

        setChartData({
          BTC: formatChartData(responses[0].data, 'BTC'),
          ETH: formatChartData(responses[1].data, 'ETH'),
          BNB: formatChartData(responses[2].data, 'BNB'),
          USDT: formatChartData(responses[3].data, 'USDT'),
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching chart data', error);
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  const formatChartData = (data, crypto) => {
    const colors = {
      BTC: 'rgba(255, 159, 64, 1)',
      ETH: 'rgba(54, 162, 235, 1)',
      BNB: 'rgba(255, 206, 86, 1)',
      USDT: 'rgba(75, 192, 192, 1)',
    };

    return {
      labels: data.prices.map((price) => new Date(price[0]).toLocaleDateString()),
      datasets: [
        {
          label: `${crypto} Price (USD)`,
          data: data.prices.map((price) => price[1]),
          fill: false,
          backgroundColor: colors[crypto],
          borderColor: colors[crypto],
          tension: 0.1,
          pointBackgroundColor: colors[crypto],
          pointBorderColor: colors[crypto],
          pointHoverBackgroundColor: colors[crypto],
          pointHoverBorderColor: colors[crypto],
        },
      ],
    };
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto my-8 p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-xl">
        {loading ? (
          <p className="text-center text-white">Loading charts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {Object.keys(chartData).map((crypto) => (
              chartData[crypto] && (
                <div key={crypto} className="bg-white shadow-lg rounded-lg p-4">
                  <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">{crypto}</h2>
                  <div className="h-64">
                    <Line data={chartData[crypto]} options={{ responsive: true, maintainAspectRatio: false }} />
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoCharts;
