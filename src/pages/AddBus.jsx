import { useContext, useState } from 'react';
import '../assets/addbus.css';
import { AdminContext } from '../service/AdminContext';
import authService from '../service/authService';
import { useNavigate } from 'react-router-dom';

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
        seattype: '',
        schedule: {
            sourcecity: '',
            destinationcity: '',
            distance: '',
            estimatedtime: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handling nested `schedule` changes separately
        if (['sourcecity', 'destinationcity', 'distance', 'estimatedtime'].includes(name)) {
            setBus((prevBus) => ({
                ...prevBus,
                schedule: {
                    ...prevBus.schedule,
                    [name]: value,
                }
            }));
        } else {
            setBus((prevBus) => ({
                ...prevBus,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission

        try {
            console.log(bus);  // Log to check the full object with admin
            const response = await authService.saveBus(bus,id);
            console.log("Bus saved successfully:", response.data);
            setAdmin(response.data.data);
            navigate("/Home/buslistgit ")

        } catch (error) {
            console.error("Error saving bus:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bus-form">
            <label htmlFor="busno">Register Number:
                <input type="text" name="busno" onChange={handleChange} value={bus.busno} />
            </label>

            <label htmlFor="seatcapacity">Seat Capacity:
                <input type="number" name="seatcapacity" onChange={handleChange} value={bus.seatcapacity} />
            </label>

            <label htmlFor="operator">Operator:
                <input type="text" name="operator" onChange={handleChange} value={bus.operator} /> {/* Fixed here */}
            </label>

            <label htmlFor="bustype">Bus Type:
                <input type="radio" name="ac" value="AC" onChange={handleChange} checked={bus.ac === 'AC'} /> A/C
                <input type="radio" name="ac" value="Non-AC" onChange={handleChange} checked={bus.ac === 'Non-AC'} /> Non A/C
            </label>

            <label htmlFor="seattype">Seat Type:
                <input type="radio" name="seattype" value="Seater" onChange={handleChange} checked={bus.seattype === 'Seater'} /> Seater
                <input type="radio" name="seattype" value="Sleeper" onChange={handleChange} checked={bus.seattype === 'Sleeper'} /> Sleeper
            </label>

            <label htmlFor="sourcecity">Select Route:
                <input type="text" placeholder="From" name="sourcecity" onChange={handleChange} value={bus.schedule.sourcecity} />
                <input type="text" placeholder="To" name="destinationcity" onChange={handleChange} value={bus.schedule.destinationcity} />
            </label>

            <label htmlFor="distance">Distance:
                <input type="text" name="distance" onChange={handleChange} value={bus.schedule.distance} />
            </label>

            <label htmlFor="estimatedtime">Travel Duration:
                <input type="text" name="estimatedtime" onChange={handleChange} value={bus.schedule.estimatedtime} />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}
