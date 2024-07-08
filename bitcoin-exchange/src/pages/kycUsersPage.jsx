import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetKycUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKycUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/get-kyc');
        const updatedUsers = response.data.map(user => ({
          ...user,
          kycStatus: user.idProofImage ? 'Verified' : 'Pending'
        }));
        setUsers(updatedUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching KYC users:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchKycUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="text-zinc-500">Admin / KYC Users</span>
        <span className="ml-4 text-zinc-500">Total: {users.length}</span>
      </div>
      <table className="min-w-full bg-white dark:bg-zinc-800">
        <thead>
          <tr className="w-full border-b">
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Phone Number</th>
            <th className="p-2 text-left">Identity Proof Type</th>
            <th className="p-2 text-left">ID Proof Image</th>
            <th className="p-2 text-left">Date of Birth</th>
            <th className="p-2 text-left">KYC Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="border-b" key={index}>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.contact}</td>
              <td className="p-2">{user.idProofType}</td>
              <td className="p-2">
                {user.idProofImage ? (
                  <a href={`http://localhost:5000/${user.idProofImage}`} download>
                    <img src={`http://localhost:5000/${user.idProofImage}`} alt="ID Proof" className="w-16 h-16" />
                  </a>
                ) : (
                  'N/A'
                )}
              </td>
              <td className="p-2">{new Date(user.dob).toLocaleDateString()}</td>
              <td
                className={`p-2 font-bold ${
                  user.kycStatus === 'Verified' ? 'text-blue-500' : 'text-red-500'
                }`}
              >
                {user.kycStatus === 'Verified' ? '✅ Verified' : '⏳ Pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetKycUsers;
