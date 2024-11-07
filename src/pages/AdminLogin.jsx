import  { useState, useContext } from 'react';
import authService from '../service/authService';
import '../assets/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AdminContext } from '../service/AdminContext';

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    adminEmail: '',
    password: ''
  });

  const { setAdmin } = useContext(AdminContext); // Access setAdmin from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.loginAdmin(credentials); // API call for admin login
      setAdmin(response.data.data); // Store admin data using setAdmin, which will also save it to sessionStorage
      navigate('/admin'); // Navigate to home page after login success
      console.log(response.data.data);
    } catch (error) {
      console.error('Failed to login admin:', error);
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="adminEmail"
            placeholder="Enter your registered email"
            value={credentials.adminEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>{"Don't "}have an account? <Link className='nav-link' to='/reg' >Register</Link></p>
        
      </form>
    </div>
  );
}

export default AdminLogin;
