import React from 'react';

const GetKycUsers = () => {
  // Dummy data
  const users = [
    {
      email: 'jane.smith@example.com',
      phoneNumber: '123-456-7890',
      identityProofType: 'Passport',
      idProofImage: 'https://placehold.co/64x64',
      dateOfBirth: '01/01/1980',
      kycStatus: 'Verified',
    },
    {
      email: 'tim.brown@example.com',
      phoneNumber: '123-456-7890',
      identityProofType: 'Driving License',
      idProofImage: 'https://placehold.co/64x64',
      dateOfBirth: '02/02/1990',
      kycStatus: 'Pending',
    },
    {
      email: 'justin.green@example.com',
      phoneNumber: '123-456-7890',
      identityProofType: 'Aadhar',
      idProofImage: 'https://placehold.co/64x64',
      dateOfBirth: '03/03/2000',
      kycStatus: 'Verified',     
    },
  ];

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
              <td className="p-2">{user.phoneNumber}</td>
              <td className="p-2">{user.identityProofType}</td>
              <td className="p-2">
                <img src={user.idProofImage} alt="ID Proof" className="w-16 h-16" />
              </td>
              <td className="p-2">{user.dateOfBirth}</td>
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
