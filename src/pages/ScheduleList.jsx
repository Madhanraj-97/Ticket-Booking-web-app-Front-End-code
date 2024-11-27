import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ScheduleList() {
    const location = useLocation();
    const { bus } = location.state || {};
    const schedules = bus.schedules;
    console.log(bus)

    return (<>
        <div className='details'>
            Bus Deatils :
            <ul>
                <li>Register no: {bus.busno}</li>
                <li>Sear count: {bus.seatcapacity}</li>
            </ul>
        </div>
        {(schedules&&schedules.length > 0) ? (<ul>
            {schedules.map((schedule) => (
                <li key={schedule.id}>
                    <div>{schedule.date}</div>
                    <div>{schedule.sourcecity} TO {schedule.destinationcity}</div>
                    <div>depart {schedule.departtime}</div>
                    <div>arrival {schedule.arrivaltime}</div>
                    <div>price {schedule.fare}rs</div>
                    <div>distance {schedule.distance}km</div>
                </li>
            ))}
            <li><Link className='nav-link' to={`/admin/addschedule/${bus.id}`} >
                <button> add </button>
            </Link></li>
        </ul>) : <div><p>There is no schedule for this bus</p>
            <Link className='nav-link' to={`/admin/addschedule/${bus.id}`} >
                <button> Add Schedules</button>
            </Link>
        </div>
        }

    </>

    )
}
