// KYCDetails.js
import React from 'react';

const KYCDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">KYC Details</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Bitcoin Atm is committed to preventing money laundering, terrorist financing, and other financial crimes. This KYC Policy outlines our procedures for verifying the identity of our customers and monitoring their transactions.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">2. Customer Identification Program (CIP)</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Identity Verification</strong>: We require customers to provide certain identification information, such as full name, date of birth, residential address, and government-issued identification (e.g., passport, driver's license).
                </li>
                <li className="mb-2">
                  <strong>Document Verification</strong>: Customers must submit clear copies or photos of their identification documents for verification purposes.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">3. Enhanced Due Diligence (EDD)</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Risk-Based Approach</strong>: We assess the risk associated with each customer and transaction based on factors such as transaction volume, country of origin, and nature of business.
                </li>
                <li className="mb-2">
                  <strong>Politically Exposed Persons (PEPs)</strong>: We conduct enhanced due diligence on customers who are identified as PEPs to mitigate the higher risk associated with them.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">4. Monitoring and Reporting</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Transaction Monitoring</strong>: We monitor transactions for unusual or suspicious activity, including large transactions or patterns that deviate from the norm.
                </li>
                <li className="mb-2">
                  <strong>Suspicious Activity Reporting</strong>: We report any suspicious transactions or activities to the relevant authorities as required by law.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">5. Customer Consent and Data Protection</h3>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
              <li className="mb-2">
                <strong>Consent</strong>: By using our services, customers consent to our collection, use, and verification of their personal information in accordance with this KYC Policy.
              </li>
              <li className="mb-2">
                <strong>Data Protection</strong>: We protect customer information in accordance with applicable data protection laws and regulations.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">6. Compliance and Training</h3>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
              <li className="mb-2">
                <strong>Compliance Oversight</strong>: We have designated compliance officers responsible for overseeing our KYC procedures and ensuring compliance with regulatory requirements.
              </li>
              <li className="mb-2">
                <strong>Employee Training</strong>: Our employees receive regular training on KYC procedures and are aware of their responsibilities in preventing financial crimes.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">7. Record Keeping</h3>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
              <li className="mb-2">
                <strong>Retention Period</strong>: We maintain records of customer identification and transaction details for a period as required by law or regulatory guidelines.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">8. Amendments to the KYC Policy</h3>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
              <li className="mb-2">
                <strong>Updates</strong>: We may update this KYC Policy periodically to reflect changes in regulatory requirements or our business practices. Customers will be notified of any material changes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KYCDetails;
