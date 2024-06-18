import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTotalUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/get-users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchUsers();
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
        <span className="text-zinc-500">Admin / Total Users</span>
        <span className="ml-4 text-zinc-500">Total: {users.length}</span>
      </div>
      <table className="min-w-full bg-white dark:bg-zinc-800">
        <thead>
          <tr className="w-full border-b">
            <th className="p-2 text-left">
              <input type="checkbox" />
            </th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="border-b" key={index}>
              <td className="p-2">
                <input type="checkbox" />
              </td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">
                {user.isAdmin ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetTotalUsers;
