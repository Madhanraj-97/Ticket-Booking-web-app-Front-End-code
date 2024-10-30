import axios from 'axios';

// const API_URL = 'http://localhost:8080/'; // Backend API endpoint

const registerAdmin = (adminDetails) => {
  return axios.post('http://localhost:8080/admin', adminDetails); // Admin registration API call
};

const loginAdmin = (credentials) => {
  return axios.get(`http://localhost:8080/admin/login?email=${credentials.adminEmail}&password=${credentials.password}`);
};

const getAdminById=(id)=>{
  return axios.get(`http://localhost:8080/admin?id=${id}`);
}

const saveBus = (bus, id) => {
  return axios.put(`http://localhost:8080/admin/savebus?id=${id}`, bus);
};

const modifyBus = (bus,id) => {
  return axios.put(`http://localhost:8080/admin/updatebus?id=${id}`,bus);
};

export default { registerAdmin, loginAdmin, saveBus, modifyBus,getAdminById };
