import axios from "axios";


const baseUrl = "https://6565fa66eb8bb4b70ef2b70a.mockapi.io/api/";

export const getAllComponentsPc = async () => {
    try {
        const response = await axios.get(`${baseUrl}componentspc`);
        return response.data;
    } catch (error) {
        return error;
    }
    
}