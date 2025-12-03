import React, { useEffect, useState } from "react";
import SalesChart from "../components/SalesChart";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">Total Users: {users.length}</div>
        <div className="card">Active Subscriptions: 320</div>
        <div className="card">Monthly Revenue: $12,500</div>
      </div>

      <SalesChart />

      <div className="table-card">
        <h3>Recent Users</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, 5).map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.company?.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
