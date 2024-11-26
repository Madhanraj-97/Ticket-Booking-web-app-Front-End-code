import React, { useContext, useState } from 'react'
import authService from '../service/authService';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminContext } from '../service/AdminContext';

export default function Schedule() {
    const { id } = useParams();
    const { setAdmin } = useContext(AdminContext);
    const navigate= useNavigate();

    const [schedule, setSchedule] = useState({
        date: '',
        sourcecity: '',
        destinationcity: '',
        distance: '',
        fare: '',
        departtime: '',
        arrivaltime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSchedule((preSchedule) => ({
            ...preSchedule,
            [name]: value
        }));
        console.log(schedule)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await authService.addSchedule(schedule,id);
            console.log(response.data)
            setAdmin(response.data.data)
            navigate('/admin/adminbuslist')
        }
        catch (error) {
            console.log(error)
        }
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date
                <input type="date" name='date' onChange={handleChange} value={schedule.date} required />
            </label>
            <label htmlFor="sourcecity">From :
                <input type="text" name='sourcecity' onChange={handleChange} value={schedule.sourcecity} required />
            </label>
            <label htmlFor="destiationcity">To :
                <input type="text" name="destinationcity" onChange={handleChange} value={schedule.destinationcity} required />
            </label>
            <label htmlFor="distance">Distance :
                <input type="number" name="distance" onChange={handleChange} value={schedule.distance} required />
            </label>
            <label htmlFor="fare">TicketPrice:
                <input type="number" name="fare" onChange={handleChange} value={schedule.fare} required />
            </label>
            <label htmlFor="departtime">depart time : 
                <input type="time" name="departtime" onChange={handleChange} value={schedule.departtime} required />
            </label>
            <label htmlFor="arrivaltime">Arrival Time :
                <input type="time" name="arrivaltime" onChange={handleChange} value={schedule.arrivaltime} required />
            </label>
            <button type='submit'>submit</button>
        </form>

    </>)
}
