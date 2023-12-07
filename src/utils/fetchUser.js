import axiosConf from "./axiosConf";

export const loginRequest = async (data) => {
  try {
    const response = await axiosConf.post(`public/auth/login`, data);  
    return response.data
  } catch (error) {
    return error
  }
}

export const registerRequest = async (data) => {
  try {
    const response = await axiosConf.post(`public/auth/register`, data);
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}