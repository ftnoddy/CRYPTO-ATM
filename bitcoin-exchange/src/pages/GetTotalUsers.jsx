import React from 'react';

const GetTotalUsers = () => {
  // Dummy data
  const users = [
    { username: 'jane.smith', fullname: 'Jane Smith', email: 'jane.smith@example.com', team: 'Team A', inactivity: '5 days' },
    { username: 'tim.brown', fullname: 'Tim Brown', email: 'tim.brown@example.com', team: 'Team B', inactivity: '2 days' },
    { username: 'justin.green', fullname: 'Justin Green', email: 'justin.green@example.com', team: 'Team C', inactivity: '1 day' },
  ];

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
            <th className="p-2 text-left">User name</th>
            <th className="p-2 text-left">Full name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Teams</th>
            <th className="p-2 text-left">Inactivity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="border-b" key={index}>
              <td className="p-2">
                <input type="checkbox" />
              </td>
              <td className="p-2">{user.username}</td>
              <td className="p-2">{user.fullname}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.team}</td>
              <td className="p-2">{user.inactivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetTotalUsers;
