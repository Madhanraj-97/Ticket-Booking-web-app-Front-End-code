import React from 'react'
import { useLocation } from 'react-router-dom';
import UserNavbar from '../component/UserNavbar';
import "../assets/resultBuslist.css";

export default function BusList() {
  const location = useLocation();
  const busList = location.state?.data || []; // Access the passed data
  console.log(busList)

  return (
    <>
      <UserNavbar />
      <p>result</p>
      <ul>
        {BusList.map((bus, index) => {
          return (
            <li key={index}>
              <div className='bus'>
                <section className='travelsname'>{bus.operator}</section>
                <section className='departuretime'>Depart TIME</section>
                <section className='duration' >{bus.schedule.estimatedtime}</section>
                <section className='Arrivaltime'>Arrival Time</section>
                <section className='fare'> 600 </section>
                <section className='seats'>avilable seats</section>
                <section className=''></section>
              </div>
            </li>
          );

        })}

      </ul>
    </>

  );

}
