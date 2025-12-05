import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserManagement = () => {
  const [users, setUsers] = useState([]);

 {/* Fetch data from database */}
 useEffect(() => {
    fetch('http://localhost:3000/api/adminusers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  {/* Delete user function */}
  const handleDelete = (userId) => {
    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setUsers(users.filter(user => user._id !== userId));
      } else {
        console.error('Failed to delete user');
      }
    })
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className='flex'>
         <nav className='flex flex-col space-y-4 p-6 bg-white h-screen w-50 mt-20'>
        <ul >
          <li className='font-medium text-3xl mb-4  underline'>
            <Link to={"/admin"}>Dashboard</Link>
          </li>
        </ul>
        <ul >
          <li>
            <Link to="/users" className='text-gray-700 hover:text-gray-900 font-medium '>User Management</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/bookings" className='text-gray-700 hover:text-gray-900 font-medium'>Booking Management</Link>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
        <div className='p-6 mt-20 bg-slate-200 w-max h-screen flex-1'>
        <h2 className='text-4xl font-semibold mb-4'>User Management</h2>
        <p className='text-gray-600 mb-10'>Manage your application's users here.</p>
        {/* User Table */}
        <table className='min-w-full bg-white rounded-lg shadow-md'>
            <thead>
                <tr>
                    <th className='py-3 px-6 bg-gray-100 text-left text-gray-600 font-medium'>User ID</th>
                    <th className='py-3 px-6 bg-gray-100 text-left text-gray-600 font-medium'>Name</th>
                     <th className='py-3 px-6 bg-gray-100 text-left text-gray-600 font-medium'>SurName</th>
                    <th className='py-3 px-6 bg-gray-100 text-left text-gray-600 font-medium'>Email</th>
                    <th className='py-3 px-6 bg-gray-100 text-left text-gray-600 font-medium'>Message</th>
                    <th className='py-3 px-6 bg-gray-100 text-left text-gray-600 font-medium'>Actions</th>
                </tr>
            </thead>
            {
                users.map((user) => (
                    <tbody key={user._id}>
                        <tr className='border-b'>
                            <td className='py-4 px-6'>{user._id}</td>
                            <td className='py-4 px-6'>{user.firstname}</td>
                            <td className='py-4 px-6'>{user.lastname}</td>
                            <td className='py-4 px-6'>{user.email}</td> 
                            <td className='py-4 px-6'>{user.message}</td>
                            <td className='py-4 px-6'>
                                <button className='text-red-600 hover:text-red-800 font-medium' onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))
            }
           
        </table>
      </div>
    </div>
  )
}

export default UserManagement