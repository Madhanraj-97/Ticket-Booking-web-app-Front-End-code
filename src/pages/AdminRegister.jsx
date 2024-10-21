import { useContext, useState } from "react"
import { AdminContext } from "../service/AdminContext";
import { Link, useNavigate } from "react-router-dom";
import authService from "../service/authService";

export function AdminRegister() {
    const [credentials, setCredentials] = useState({
        operator: '',
        email: '',
        password: ''
    });

    const { setAdmin } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.registerAdmin(credentials);
            setAdmin(response.data.data)
            navigate('/home'); // Navigate to home page after login success
            console.log(response.data.data);
        } catch (error) {
            console.error('Failed to login admin:', error);
        }
    }
    return (<>
        <div className="admin-register">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Travels name :  <input
                        type="text"
                        name="operator"
                        placeholder="TravelsName"
                        value={credentials.operator}
                        onChange={handleChange}
                        required
                    /></label>
                </div>
                <div>
                    <label htmlFor="">Email : <input
                        type="email"
                        name="email"
                        placeholder="Enter your registered email"
                        value={credentials.adminEmail}
                        onChange={handleChange}
                        required
                    /></label>
                </div>
                <div>
                    <label htmlFor="">Password :  <input
                        type="text"
                        name="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    /></label>
                </div>
                
                <button type="submit">Register</button>
                <p>already have an account? <Link className='nav-link' to='/' >Login</Link></p>

            </form>
        </div>
    </>)
}