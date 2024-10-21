import{ createContext, useState, useEffect } from 'react';

// Create AdminContext
export const AdminContext = createContext();

// Create a provider component
export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    // Check if there's any admin data in sessionStorage
    const savedAdmin = sessionStorage.getItem('admin');
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  useEffect(() => {
    // Whenever admin data changes, save it to sessionStorage
    if (admin) {
      sessionStorage.setItem('admin', JSON.stringify(admin));
    } else {
      sessionStorage.removeItem('admin'); // Clear sessionStorage if admin is null
    }
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
