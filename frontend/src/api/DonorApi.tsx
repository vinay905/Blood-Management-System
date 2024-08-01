// src/api/DonorApi.tsx
import axios from 'axios';

const API_URL = 'http://localhost:9090/api/donor/donor-registration';

interface DonorData {
  name: string;
  age: number;
  bloodType: string;
  email: string;
  phone: string;
  address: string;
}

export const donorRegistration = async (data: DonorData) => {
  const response = await axios.post(API_URL, data, {
    auth: {
      username: 'user',
      password: 'password'
    }
  });
  return response.data;
};
