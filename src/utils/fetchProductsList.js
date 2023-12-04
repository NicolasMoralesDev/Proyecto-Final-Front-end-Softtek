import axios from "axios";

const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST || "localhost";
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT || 8081;

const url = `http://${BACKEND_HOST}:${BACKEND_PORT}/api/`;


export const getAllProducts = async (page = 1) => { // 
    try {

        const response = await axios.get(`${url}public/products?complete=false&page=${page}&limit=10`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProduct = async (id) => { 
 
    try {

        const response = await axios.get(`${url}public/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProductByCategory = async (category) => {

    try {

        const response = await axios.get(`${url}public/products/categories/${category}`); 
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const deleteProduct = async (id) => {

    try {

        const response = await axios.get(`${url}admin/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const addProduct = async (product) => {

    try {

        const response = await axios.post(`${url}admin/products`, product);
        return response.data;

    } catch (error) {
        return error;
    }
    
}