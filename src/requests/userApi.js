import axios from "axios";
import { API_URL } from "../../variable";

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    console.log(res.data);

    if (typeof window !== "undefined") {
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("role",res.data.role)
      }

  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    token = localStorage.getItem("token")
    await axios.get(`${API_URL}/api/auth/user/${token}`).then(res => {
      console.log(res.data)
      return res.data;
      
    }).catch(({response: {status, data}}) =>{
      res.status(status).json(data.message)
    })
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.get(`${API_URL}/api/auth/logout`);
    
    if (typeof window !== "undefined") {

      localStorage.removeItem("token")
      localStorage.removeItem("role")
      
      }
  } catch (error) {
    console.log(error);
  }
};
