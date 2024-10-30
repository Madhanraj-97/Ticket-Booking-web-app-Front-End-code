import { useContext, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import authService from "../service/authService";
import '../assets/addbus.css'
import { AdminContext } from "../service/AdminContext";

export function EditBus() {
    const {admin, setAdmin}=useContext(AdminContext);
    const space=" :    ";
    const location = useLocation();
    const { bus } = location.state || {}; // Destructure editedBus from location state

    const navigate = useNavigate();

    // Initialize state with the editedBus object data
    const [editedBus, setEditedBus] = useState(bus);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handling nested `schedule` changes separately
        if (['sourcecity', 'destinationcity', 'distance', 'estimatedtime'].includes(name)) {
            setEditedBus((prevBus) => ({
                ...prevBus,
                schedule: {
                    ...prevBus.schedule,
                    [name]: value,
                }
            }));
        } else {
            setEditedBus((prevBus) => ({
                ...prevBus,
                [name]: value,
            }));
        }
    };

    // Handle form submission (you can add save logic here)
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission

        try {
            console.log(editedBus);  // Log to check the full object with admin
            const response = await authService.modifyBus(editedBus, editedBus.id);// API call for modify bus
            console.log("editedBus modifiy successfully:", response.data);
            navigate('/Home/buslist');
           
        } catch (error) {
            console.error("Error saving editedBus:", error.AdminContext);
        }
    };

    return (
        <form  onSubmit={handleSubmit} className="bus-form">
            <label htmlFor="busno">Register Number{space}
                <input type="text" name="busno" value={editedBus.busno} onChange={handleChange} required />
            </label>

            <label htmlFor="seatcapacity">Seat Capacity:
                <input type="number" name="seatcapacity" value={editedBus.seatcapacity} onChange={handleChange} required/>
            </label>

            <label htmlFor="operator">Operator:
                <input type="text" name="operator" value={editedBus.operator} onChange={handleChange} required /> {/* Fixed here */}
            </label>

            <label htmlFor="bustype">editedBus Type:
                <input type="radio" name="ac" value="AC" checked={editedBus.ac === 'AC'}  onChange={handleChange} /> A/C
                <input type="radio" name="ac" value="Non-AC" checked={editedBus.ac === 'Non-AC'}  onChange={handleChange}  /> Non A/C
            </label>

            <label htmlFor="seattype">Seat Type:
                <input type="radio" name="seattype" value="Seater" checked={editedBus.seattype === 'Seater'}  onChange={handleChange} /> Seater
                <input type="radio" name="seattype" value="Sleeper" checked={editedBus.seattype === 'Sleeper'} onChange={handleChange} /> Sleeper
            </label>

            <label htmlFor="sourcecity">Select Route: {" "}
                <input type="text" placeholder="From" name="sourcecity" value={editedBus.schedule.sourcecity} onChange={handleChange} />
                {"<--->"}
                <input type="text" placeholder="To" name="destinationcity" value={editedBus.schedule.destinationcity} onChange={handleChange} />
            </label>

            <label htmlFor="distance">Distance:  
                <input type="text" name="distance" value={editedBus.schedule.distance} onChange={handleChange} required/>
            </label>

            <label htmlFor="estimatedtime">Travel Duration:
                <input type="text" name="estimatedtime" value={editedBus.schedule.estimatedtime} onChange={handleChange} required />
            </label>

            <button  type="submit">Submit</button>
        </form>
    );

}