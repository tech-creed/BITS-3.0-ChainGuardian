import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import '../public/crypto/css/navbar.css'
import { useAuthContext } from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'

const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  // console.log(user.displayName)
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-10 text-white flex justify-between items-center" style={{ zIndex: '10' }}>
      <Link to="/" className="text-3xl font-bold text-yellow-400 hover:text-yellow-200">ChainGuardian</Link>
      <div className="text-right">
        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="text-lg hover:text-gray-300">Dashboard</Link>
          </li>
          <li className="text-lg">Hi, {user.displayName}</li>
          <li>
            <Link onClick={logout} to="/" className="text-lg hover:text-gray-300">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

