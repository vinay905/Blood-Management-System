
import axios from 'axios';

const API_URL = 'http://localhost:9090/api/hospitals/all';

export const getAllHospitals = async () => {
  const response = await axios.get(API_URL,{
    auth: {
        username: 'user',
        password: 'password'
    }
});
  return response.data;
};

// export const getHospitalById = async (id) => {
//   const response = await axios.get(`${API_URL}/${id}`);
//   return response.data;
// };
// const hospital={
//   name:"kailashj",
//   address:"dehradun",
//   blood_typesname:"A+"
// };

// export const createHospital = async (hospital) => {
//   const response = await axios.post(API_URL, hospital);
//   return response.data;
// };

// export const updateHospital = async (id, hospital) => {
//   const response = await axios.put(`${API_URL}/${id}`, hospital);
//   return response.data;
// };

// export const deleteHospital = async (id) => {
//   const response = await axios.delete(`${API_URL}/${id}`);
//   return response.data;
// };
