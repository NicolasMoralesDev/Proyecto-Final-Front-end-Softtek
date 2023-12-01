import axios from "axios";

const url = "http://localhost:8081/api/public/auth";

export const loginRequest = async (data) => {
  try {
    const response = await axios.post(`${url}/login`, data);
    return response.data
  } catch (error) {
    return error
  }
}

export const registerRequest = async (data) => {
  try {
    const response = await axios.post(`${url}/register`, data);
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}