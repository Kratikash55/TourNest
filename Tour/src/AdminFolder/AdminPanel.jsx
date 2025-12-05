import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use relative path if you have Vite proxy set up
    fetch('http://localhost:3000/api/adminusers')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch admin users');
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex">
      {/* Side navbar */}
      <nav className="flex flex-col space-y-4 p-6 bg-white h-screen w-50 mt-20">
        <ul>
          <li >
            <Link to="/admin" className="font-medium text-3xl mb-4 underline hover:cursor-pointer">Dashboard</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/users" className="text-gray-700 hover:text-gray-900 font-medium hover:cursor-pointer">
              User Management
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/bookings" className="text-gray-700 hover:text-gray-900 font-medium">
              Booking Management
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <div className="p-6 mt-20 bg-slate-200 w-max h-screen flex-1">
        <h2 className="text-4xl font-semibold mb-4">Welcome to the Admin Panel</h2>
        <p className="text-gray-600">Select an option from the sidebar to manage users or bookings.</p>

        {/* Total bookings (static for now, can be fetched later) */}
        <div className="mt-10 p-6 bg-white rounded-lg shadow-md w-80">
          <h3 className="text-2xl font-semibold mb-4">Total Bookings</h3>
          <p className="text-3xl font-bold text-blue-600">1,250</p>
        </div>

        {/* Total users */}
        <div className="mt-10 p-6 bg-white rounded-lg shadow-md w-80">
          <h3 className="text-2xl font-semibold mb-4">Total Users</h3>
          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
          {!loading && !error && (
            <p className="text-3xl font-bold text-green-600">{users.length}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;