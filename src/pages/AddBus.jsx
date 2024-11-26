import { useContext, useState } from 'react';
import '../assets/addbus.css';
import { AdminContext } from '../service/AdminContext';
import authService from '../service/authService';
import { useNavigate } from 'react-router-dom';
import React from 'react';


export function AddBus() {
    const { admin } = useContext(AdminContext);
    const id= admin.id;
    const { setAdmin } = useContext(AdminContext);
    const navigate = useNavigate();

    const [bus, setBus] = useState({
        busno: '',
        seatcapacity: '',
        operator: admin.operator, // Fixed here
        ac: '',
        seattype: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Handling nested `schedule` changes separately
            setBus((prevBus) => ({
                ...prevBus,
                [name]: value,
            }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission

        try {
            const response = await authService.saveBus(bus,id);
            setAdmin(response.data.data);
            navigate("/admin/buslist ")

        } catch (error) {
            console.error("Error saving bus:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bus-form">
            <label htmlFor="busno">Register Number:
                <input className='businput' type="text" name="busno" onChange={handleChange} value={bus.busno} />
            </label>

            <label htmlFor="seatcapacity">Seat Capacity:
                <input className='businput' type="number" name="seatcapacity" onChange={handleChange} value={bus.seatcapacity} />
            </label>

            <label htmlFor="operator">Operator:
                <input className='businput' type="text" name="operator" onChange={handleChange} value={bus.operator} /> {/* Fixed here */}
            </label>

            <label htmlFor="bustype">Bus Type:
                <input className='businput' type="radio" name="ac" value="AC" onChange={handleChange} checked={bus.ac === 'AC'} /> A/C
                <input className='businput' type="radio" name="ac" value="Non-AC" onChange={handleChange} checked={bus.ac === 'Non-AC'} /> Non A/C
            </label>

            <label htmlFor="seattype">Seat Type:
                <input className='businput' type="radio" name="seattype" value="Seater" onChange={handleChange} checked={bus.seattype === 'Seater'} /> Seater
                <input className='businput' type="radio" name="seattype" value="Sleeper" onChange={handleChange} checked={bus.seattype === 'Sleeper'} /> Sleeper
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}
