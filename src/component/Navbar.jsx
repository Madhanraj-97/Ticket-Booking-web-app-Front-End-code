import { Link } from 'react-router-dom';
import '../assets/navbar.css';

export function Navbar() {
  return (
    <div id='nav'>
      <ul className="nav-bar">
        <li><Link className='nav-link' to="/home/welcome">Home</Link></li>
        <li><Link className='nav-link' to="/home/profile">Profile</Link></li>
        <li><Link className='nav-link' to="/home/addBus">Add Bus</Link></li>
        <li><Link className='nav-link' to="/home/buslist">Bus list</Link></li>
        <li><Link className='nav-link' to="/">Logout</Link></li>
      </ul>
    </div>
  );
}
