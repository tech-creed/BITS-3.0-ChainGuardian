import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../public/crypto/css/navbar.css'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { user } = useAuthContext()
  console.log(user.displayName)

  return (
    <div className="navbar">
      <div className="logo"><Link to='/'>ChainGuardian</Link></div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li className="username">Hi, {user.displayName}</li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

