import React from 'react';
import shippingPolicesLogo from '../assets/delivery.png';

const ShippingPolicies = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">Shipping Policies</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mb-8">
            <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
              <img src={shippingPolicesLogo} alt="Shipping Policies" className="max-w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Delivery Time</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                It will take a minimum of 5 minutes to get the desired cryptocurrency delivered to your wallet address once the payment is done. In case of any technical errors or unwanted circumstances, the desired cryptocurrency will be delivered to you within a maximum of 72 hours.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Shipping Charges</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                A minimal sum of money will be charged for shipping the cryptocurrency to the customer’s wallet address, which will be included in the purchase amount.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Electronic Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The desired cryptocurrency will be delivered to you electronically via your wallet address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingPolicies;
