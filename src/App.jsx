import './App.css';
import AdminLogin from './pages/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminProvider } from './service/AdminContext';
import { AdminRegister } from './pages/AdminRegister';
import { AdminHome } from './pages/AdminHome';

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          {/* Route for Admin login */}
          <Route path="/" element={<AdminLogin />} />
          <Route path="/reg" element={<AdminRegister />} />

          {/* Protected route for Admin home and dashboard routes */}
          <Route path="/home/*" element={<AdminHome/>} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
