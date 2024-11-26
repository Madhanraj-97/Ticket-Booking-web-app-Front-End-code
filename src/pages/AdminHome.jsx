import { useContext } from 'react';
import { AdminContext } from '../service/AdminContext';
import '../assets/adminhome.css';
import { Navbar } from '../component/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AdminProfile } from './AdminProfile';
import { AdminWelcome } from './AdminWelcome';
import { AdminBusList } from './AdminBusList';
import { AddBus } from './AddBus';
import { EditBus } from './EditBus';
import React from 'react';
import BusSchedule from './ScheduleList';
import ScheduleList from './ScheduleList';
import Schedule from './Schedule';


export function AdminHome() {
  const { admin } = useContext(AdminContext); // Access admin data using useContext

  // if (!admin) return <h1>No admin data available</h1>;

  return (
    <>
      {/* Navbar for all admin-related routes */}
      <Navbar />

      {/* Admin-related routes */}
      <Routes>
        {/* Default redirect to /home/welcome when accessing /home */}
        <Route path="/" element={<Navigate to="welcome" />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/welcome" element={<AdminWelcome />} />
        <Route path="/adminbuslist" element={<AdminBusList />} />
        <Route path='/addbus' element={<AddBus />} />
        <Route path='/editbus' element={<EditBus/>} />
        <Route path='/schedule' element={<ScheduleList/>}/>
        <Route path='/addschedule/:id' element={<Schedule/>}/>
      </Routes>
    </>
  );
}
