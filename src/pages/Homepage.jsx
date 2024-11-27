import UserNavbar from '../component/UserNavbar';
import '../assets/homepage.css';
import { useState } from 'react'
import authService from '../service/authService';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Seats from './Seats';

export default function Homepage() {
  const navigate = useNavigate();

  const [city, setCity] = useState({
    from: "",
    to: "",
    date:'',
  });

  const [buslist, setBuslist] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Request Data:", city);
      const response = await authService.searchBus(city.from,city.to,city.date);
      console.log("Response:", response.data);
      setBuslist(response.data.data);
      navigate("/buslist", { state: response.data });
    } catch (error) {
      console.error("Error fetching bus list:", error.response || error.message);
    }
  };

  return (
    <div id='homepage'>
      <UserNavbar />
      <section className='homediv'>
        <form onSubmit={handleSubmit}>
          <div id='searchbar'>
            <section className='searchinput'>
              <input
                type="text"
                name="from"
                placeholder='from'
                value={city.from}
                onChange={handleChange}
                required />
            </section>
            <section className='searchinput'>
              <input
                type="text"
                name="to"
                placeholder='To'
                value={city.to}
                onChange={handleChange}
                required />
            </section>
            <section className='searchinput'>
              <input name='date'
                type="date"
                placeholder='Date'
                value={city.date}
                onChange={handleChange}
                required />
            </section>
            <section className='searchinput'> <button type='submit'
              className='bussearch'>Search</button> </section>
          </div>
        </form>
      </section>
    </div>
  )
}

