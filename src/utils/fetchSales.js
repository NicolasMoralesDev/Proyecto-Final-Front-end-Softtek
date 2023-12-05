import axios from 'axios';

const url = 'http://localhost:8081/';
const token = localStorage.getItem('token');

export const sendSale = async (sale) => {
  try {
      const response = await axios.post(`${url}api/user/sale/save`, sale, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      console.log(response.data)
      return response.data;
  } catch (error) {
      return error;
  }
}
