import axios from 'axios';
const API_URL = 'http://localhost:9090/api/admin';

interface loginDetails {
  username:string,
  userpassword:string,

}


export const adminLogin = async (data: loginDetails) => {
  const response = await axios.post(`${API_URL}/verify`, data, {
    auth: {
      username: 'user',
      password: 'password'
    }
  });
  return response.data;
};

export const allRequests = async () => {
  const response = await axios.get(`${API_URL}/all-requests`, {
      headers: {
          'Authorization': 'Basic ' + btoa('user:password') 
      }
  });
  return response;
};

export const verifyToken = async (token:string) => {
  try {
    const response = await axios.post(`${API_URL}/validate-token`, token, {
      auth: {
        username: 'user',
        password: 'password'
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Token verification failed:', error);
    return false;
  }
};

export const getAllDonors = async() =>{
  try{
    const response=await axios.get(`${API_URL}/all-donors`,{
      auth:
      {
        username: 'user',
        password: 'password'
      }
    });
    return response.data;
  }
  catch(error)
  {
    console.error(error)
      return false;
  }
};