import React, { useEffect, useState } from 'react';

import './UserTable.css';

const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setData(data.users));
  }, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th className="header">Sno</th>
            <th>Profile Pic</th>
            <th className="header">First Name</th>
            <th className="header">Last Name</th>
            <th className="header">Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
