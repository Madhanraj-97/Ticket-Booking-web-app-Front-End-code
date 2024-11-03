import { useContext } from "react";
import { AdminContext } from "../service/AdminContext";
import '../assets/buslist.css';
import { Link } from "react-router-dom";
import authService from "../service/authService";

export function BusList() {

    const { admin,setAdmin } = useContext(AdminContext);
    const busList = admin.bus;

    const handleDelete = async (id) => {
        try {
            console.log(id)
            const response = await authService.deleteBus(id);
            setAdmin(response.data.data); // API call to delete bus by ID
            console.log("Bus deleted successfully:", response.data);
        } catch (error) {
            console.error("Error deleting bus:", error);
        }
    };
    return (<>
        <table>
            <tr>
                <th>Reg No.</th>
                <th>Seat Count</th>
                <th>Bus Type</th>
                <th>Seat Type</th>
                <th>Route</th>
                <th>EDIT</th>
                <th>Delete</th>
                <th>Show seats</th>
            </tr>
            {busList.map((bus) => (
                <tr key={bus.id}>
                    <td>{bus.busno}</td>
                    <td>{bus.seatcapacity}</td>
                    <td>{bus.ac}</td>
                    <td>{bus.seattype}</td>
                    <td>{bus.schedule.sourcecity}{" <---> "}{bus.schedule.destinationcity}</td>
                    <td>
                        <Link className='nav-link' to="/home/editbus" state={{ bus }}>
                            <button>Edit</button>
                        </Link>
                    </td>
                    <td>
                    <button id="delete" onClick={() => handleDelete(bus.id)}>
                                    Delete
                                </button>
                    </td>
                    <td>
                        <button id='seatbtn' type="button" >Show seats</button>
                    </td>
                </tr>
            ))}
        </table>
    </>

    );
}