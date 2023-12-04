import axios from "axios";

const url = "http://localhost:8081/api/";

export const getAllProducts = async (page = 0) => {

    try {

        const response = await axios.get(`${url}public/products?page=${page}`);
        console.log(response.data);
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