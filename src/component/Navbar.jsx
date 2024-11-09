import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import React from 'react';


export function Navbar() {
  return (
    <div id='nav'>
      <ul className="nav-bar">
        <li><Link className='nav-link' to="/admin/welcome">Home</Link></li>
        <li><Link className='nav-link' to="/admin/profile">Profile</Link></li>
        <li><Link className='nav-link' to="/admin/addBus">Add Bus</Link></li>
        <li><Link className='nav-link' to="/admin/buslist">Bus list</Link></li>
        <li><Link className='nav-link' to="/adminlogin">Logout</Link></li>
      </ul>
    </div>
  );
}
