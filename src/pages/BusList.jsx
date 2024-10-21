import { useContext } from "react";
import { AdminContext } from "../service/AdminContext";
import '../assets/buslist.css';
import { Link } from "react-router-dom";

export function BusList() {

    const { admin } = useContext(AdminContext);
    const busList = admin.bus;
    return (<>
        <table>
            <tr>
                <th>Reg No.</th>
                <th>Seat Count</th>
                <th>Bus Type</th>
                <th>Seat Type</th>
                <th>Route</th>
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
                </tr>
            ))}
        </table>
    </>

    );
}