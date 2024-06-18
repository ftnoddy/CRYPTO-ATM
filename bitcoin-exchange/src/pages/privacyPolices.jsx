// PrivacyAndPolicies.js
import React from 'react';

const PrivacyAndPolicies = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">Privacy & Policies</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This Privacy Policy outlines how Bitcoin Atm collects, uses, and protects your personal information. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">2. Information Collection</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Personal Information</strong>: We collect personal information such as name, email address, phone number, and government-issued identification for verification purposes.
                </li>
                <li className="mb-2">
                  <strong>Usage Data</strong>: We may collect information on how our service is accessed and used, including your IP address, browser type, and pages visited.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">3. Use of Information</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Service Provision</strong>: To provide and maintain our services, including account management and customer support.
                </li>
                <li className="mb-2">
                  <strong>Improvement</strong>: To monitor and analyze usage to improve our services.
                </li>
                <li className="mb-2">
                  <strong>Compliance</strong>: To comply with legal obligations and protect against legal liability.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">4. Data Protection</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Security Measures</strong>: We implement security measures to protect your personal information from unauthorized access and disclosure.
                </li>
                <li className="mb-2">
                  <strong>Data Retention</strong>: We retain your personal information only for as long as necessary for the purposes set out in this Privacy Policy.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">5. Third-Party Services</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Service Providers</strong>: We may employ third-party companies to facilitate our services, provide the service on our behalf, or assist us in analyzing how our service is used.
                </li>
                <li className="mb-2">
                  <strong>Compliance with Laws</strong>: We may disclose your personal information if required to do so by law or in response to valid requests by public authorities.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">6. Your Rights</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc list-inside">
                <li className="mb-2">
                  <strong>Access</strong>: You have the right to access the personal information we hold about you and to request corrections or deletions.
                </li>
                <li className="mb-2">
                  <strong>Consent Withdrawal</strong>: You have the right to withdraw your consent to our processing of your personal information at any time.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">7. Changes to This Privacy Policy</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">8. Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions about this Privacy Policy, please contact us at support@bitcoinatm.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyAndPolicies;
