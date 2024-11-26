import axios from 'axios';


const API_URL = 'https://ticketz-booking-app.onrender.com/'; // Backend API endpoint


const registerAdmin = (adminDetails) => {
  return axios.post(`${API_URL}admin`, adminDetails); // Admin registration API call
};

const loginAdmin = (credentials) => {
  return axios.get(`${API_URL}admin/login?email=${credentials.adminEmail}&password=${credentials.password}`);
};

const getAdminById = (id) => {
  return axios.get(`${API_URL}admin?id=${id}`);
}

const saveBus = (bus, id) => {
  return axios.put(`${API_URL}admin/savebus?id=${id}`, bus);
};

const modifyBus = (bus, id) => {
  return axios.put(`${API_URL}admin/updatebus?id=${id}`, bus);
};
const deleteBus = (busid) => {
  return axios.put(`${API_URL}admin/deletebus?id=${busid}`);
};
const addSchedule= (schedule,id)=>{
  return axios.put(`${API_URL}admin/saveschedule?id=${id}`,schedule)
}
const searchBus=(from,to,date)=>{
  return axios.get(`${API_URL}schedule/searchbus?from=${from}&to=${to}&date=${date}`);
}



export default { addSchedule, registerAdmin, loginAdmin, saveBus, modifyBus, getAdminById, deleteBus, searchBus };
