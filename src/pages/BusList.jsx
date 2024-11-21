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
          <li key={bus.id}>
            <div>
              <div>{bus.busno}</div>
              <div>{bus.seatcapacity}</div>
              <div>{bus.ac}</div>
              <div>{bus.seattype}</div>
              <div>{bus.schedule.sourcecity}{" <---> "}{bus.schedule.destinationcity}</div>
            </div>
          </li>)
        )}
      </ul>
    </div>

  );

}
