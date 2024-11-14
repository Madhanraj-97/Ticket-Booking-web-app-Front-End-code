import React from 'react'
import { Link } from 'react-router-dom'

export default function UserNavbar() {
  return (
    <div id='usernav'>
    <ul className="nav-bar">
        <li><Link className='nav-link' to="/">Home</Link></li>
      <li><Link className='nav-link' to="/admin/welcome">Account</Link></li>
    </ul>
  </div>
  )
}
