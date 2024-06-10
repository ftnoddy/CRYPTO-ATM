import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setStatus('Message sent successfully!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4 py-8">
      <div className="bg-white bg-opacity-10 rounded-lg p-6 md:p-8 w-full max-w-3xl mx-auto backdrop-filter backdrop-blur-lg shadow-xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm text-white">Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="block mb-2 text-sm text-white">Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="block mb-2 text-sm text-white">Mobile:</label>
            <input
              type="text"
              value={mobile}
              onChange={handleMobileChange}
              required
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="block mb-2 text-sm text-white">Message:</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              rows="4"
              required
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm"
            >
              Send
            </button>
          </form>

          {status && <p className="mt-4 text-sm text-white">{status}</p>}

          <div className="get-in-touch mt-8">
            <h3 className="text-xl mb-2 text-yellow-400">Get In Touch</h3>
            <p className="text-sm text-white">If you have any questions, give us a call:</p>
            <a href="tel:+1234567890" className="phone-link flex items-center mt-2 text-white text-sm">
              <FaPhone className="phone-icon mr-2" />
              +1 8502905200
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Our Location</h3>
          <p className="text-sm text-white mb-4">
            GN 34/1, GN Block, Sector V, Bidhannagar, BIDHANNAGAR, West Bengal 700091
          </p>
          <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14736.20868280687!2d88.4277248!3d22.577151999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716978600487!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
