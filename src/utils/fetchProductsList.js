import axiosConf from "./axiosConf";

export const getAllProducts = async (page = 0) => {

    try {

        const response = await axiosConf.get(`public/products?page=${page}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProduct = async (id) => { 
 
    try {

        const response = await axiosConf.get(`public/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProductByQuery = async (page = 0, query) => { 
 
    try {

        const response = await axiosConf.get(`public/product?page=${page}&q=${query}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const getProductByCategory = async (category, page=0) => {

    try {

        const response = await axiosConf.get(`public/products/categories/${category}?page=${page}`); 
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const deleteProduct = async (id) => {

    try {

        const response = await axiosConf.delete(`admin/products/${id}`);
        return response.data;

    } catch (error) {
        return error;
    }
    
}

export const addProduct = async (product) => {
    console.log(product)

    try {

        const response = await axiosConf.post(`admin/products`, product);
        return response.data;

    } catch (error) {
        return error;
    }
    
}
export const updateProduct = async (productId, updatedProductData) => {
    try {
      const response = await axiosConf.put(`admin/products/${productId}`, updatedProductData);
      return response.data;
    } catch (error) {
      return error;
    }
  };