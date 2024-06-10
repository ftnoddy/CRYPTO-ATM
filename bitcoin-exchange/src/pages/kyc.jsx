import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import kycLogo from "../assets/kyclogo.png";

function Kyc() {
  const [formData, setFormData] = useState({
    email: "",
    contact: "",
    idProofType: "",
    dob: "",
  });
  
  const [idProofImage, setIdProofImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setIdProofImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataObj = new FormData();
    formDataObj.append('email', formData.email);
    formDataObj.append('contact', formData.contact);
    formDataObj.append('idProofType', formData.idProofType);
    formDataObj.append('dob', formData.dob);
    formDataObj.append('idProofImage', idProofImage);

    try {
      const response = await axios.post('http://localhost:5000/api/users/kyc', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      toast.success('KYC verification successful');
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error occurred while verifying KYC');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-lg mx-auto border border-gray-300">
        <div className="mb-4 flex justify-center">
          <img src={kycLogo} alt="KYC Logo" className="w-12" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">KYC Verification</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block mb-1 text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="identityProof" className="block mb-1 text-gray-700">Identity Proof</label>
            <select
              id="identityProof"
              name="idProofType"
              value={formData.idProofType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select ID Proof Type</option>
              <option value="passport">Passport</option>
              <option value="drivingLicense">Driving License</option>
            </select>
          </div>
          <div>
            <label htmlFor="idProofImage" className="block mb-1 text-gray-700">ID Proof Image</label>
            <input
              type="file"
              id="idProofImage"
              name="idProofImage"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className="block mb-1 text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-md py-2 transition duration-200">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Kyc;
