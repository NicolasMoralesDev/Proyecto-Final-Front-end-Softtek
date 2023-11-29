import axios from "axios";

const url = "https://6274471f3d2b5100742a5877.mockapi.io/";

export const getAllProducts = async (page = 1) => {

    try {

        const response = await axios.get(`${url}productos?completed=false&page=${page}&limit=20`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProduct = async (id) => {

    try {

        const response = await axios.get(`${url}productos/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const deleteProduct = async (id) => {

    try {

        const response = await axios.get(`${url}productos/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const putProduct = async (data) => {

    try {

        const response = await axios.get(`${url}productos`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}