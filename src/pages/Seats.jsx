import React from 'react';
import "../assets/seat.css"
import { useLocation } from 'react-router-dom';

export default function Seats() {
  const location = useLocation();
  const { seat } = location.state || {}; // Destructure `seat` safely

  return (
    <div className="seats">
      <h2>Seat Layout</h2>
      <ul>
        {(seat.map((s) => (
          <li key={s.id}>
            <div className={`seat ${s.status ? 'booked' : 'available'}`}>
              {s.status ? 'Booked' : `${s.seatNo}`}
            </div>
          </li>
        ))
        )}
      </ul>
    </div>
  );
}
