import React from 'react'
import { Link } from 'react-router-dom'

const BookingManagement = () => {
  return (
    <div className='flex'>
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
            <Link to="/bookings" className="text-gray-700 hover:text-gray-900 font-medium hover:cursor-pointer">
              Booking Management
            </Link>
          </li>
        </ul>
      </nav>

      

    </div>
  )
}

export default BookingManagement