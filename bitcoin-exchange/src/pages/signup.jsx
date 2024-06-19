// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/send-otp-mail', { email });
      toast.success('OTP sent successfully');
    } catch (error) {
      console.error('Error sending OTP', error);
      toast.error('Failed to send OTP');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users', { name, email, otp, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/kyc');
    } catch (error) {
      console.error('Error during signup', error);
      toast.error('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-purple-500 text-white rounded-md py-2 mt-2 w-full"
            >
              Send OTP
            </button>
          </div>
          <div>
            <label htmlFor="otp" className="block mb-1">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 mr-2 mt-2"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white rounded-md py-2">Sign Up</button>
        </form>
        <p className="text-gray-700 text-center mt-4">
          Already have an account? <a href="/login" className="text-purple-500">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
