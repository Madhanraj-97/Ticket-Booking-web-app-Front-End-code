import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserNavbar from '../component/UserNavbar';
import "../assets/resultBuslist.css";

export default function BusList() {
  const location = useLocation();
  const navigate = useNavigate();
  const busList = location.state?.data || []; // Access the passed data
  console.log(busList)
  const handleShowSeats = (seats) => {
    navigate('/seats', { state: { seat: seats } });
  };

  return (
    <div>
      <UserNavbar />
      <p>result</p>
      <ul>
        {busList.map((bus) => (
          <li key={bus.id}>
            <div className='bus'>
              <section>{bus.bus.operator}</section>
              <section>{bus.sourcecity} TO {bus.destinationcity}</section>
              <section>{bus.departtime}</section>
              <section>{bus.arrivaltime}</section>
              <section>{"travel duration"}</section>
              <section><p>price</p>{bus.fare}</section>
              <section><p>distance</p>{bus.distance}</section>
              <button onClick={() => handleShowSeats(bus.seat)}>Show Seats</button>

            </div>
          </li>)
        )}
      </ul>
    </div>

  );

}
