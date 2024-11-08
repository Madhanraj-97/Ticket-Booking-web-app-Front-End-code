import './App.css';
import AdminLogin from './pages/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminProvider } from './service/AdminContext';
import { AdminRegister } from './pages/AdminRegister';
import { AdminHome } from './pages/AdminHome';
import Homepage from './pages/Homepage';

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          {/* Route for Admin login */}
          <Route path="/" element={<Homepage/>}/>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminreg" element={<AdminRegister />} />

          {/* Protected route for Admin home and dashboard routes */}
          <Route path="/admin/*" element={<AdminHome/>} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
