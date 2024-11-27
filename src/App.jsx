import './App.css';
import AdminLogin from './pages/AdminLogin';
import { AdminProvider } from './service/AdminContext';
import { AdminRegister } from './pages/AdminRegister';
import { AdminHome } from './pages/AdminHome';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import BusList from './pages/BusList';
import Seats from './pages/Seats';



function App() {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          {/* Route for Admin login */}
          <Route path="/" element={<Homepage/>}/>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminreg" element={<AdminRegister />} />
          <Route path="/buslist" element={<BusList/>}/>
          <Route path="/seats" element={<Seats />} />

          {/* Protected route for Admin home and dashboard routes */}
          <Route path="/admin/*" element={<AdminHome/>} />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
