// src/pages/CryptoChartPage.jsx
import React from 'react';
import CryptoCharts from '../components/cryptoChart';

const CryptoChartPage = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-6">Cryptocurrency Charts</h2>
          <CryptoCharts />
        </div>
      </section>
    </div>
  );
};

export default CryptoChartPage;
