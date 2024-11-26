import React from 'react'
import { useLocation } from 'react-router-dom';
import UserNavbar from '../component/UserNavbar';
import "../assets/resultBuslist.css";

export default function BusList() {
  const location = useLocation();
  const busList = location.state?.data || []; // Access the passed data
  console.log(busList)

  return (
    <div>
      <UserNavbar />
      <p>result</p>
      <ul>
        {busList.map((bus) => (
          <li  key={bus.id}>
            <div className='bus'>
              
            </div>
          </li>)
        )}
      </ul>
    </div>

  );

}
