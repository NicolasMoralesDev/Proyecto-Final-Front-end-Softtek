import axiosConf from "./axiosConf";

export const sendSale = async (sale) => {
    try {
        const response = await axiosConf.post("user/sale/save", sale);
        return response;
    } catch (error) {
        return error;
    }
}

export const payMd = async (sale) => {
    try {

        let request = {
            id: "23",
            price: sale[1],
            amount: sale[0]
        };

        const response = await axiosConf.post("user/sales/pay", request);
        location.replace(response.data);

    } catch (error) {
        return error;
    }
}
/*
export const getUserSales = async (idUser, page=0) => {
    try {
        const response = await axiosConf.post(`user/sale/all?page=${page}`, idUser);
        return response;
    } catch (error) {
        console.error("Error al obtener las ventas del usuario", error);
        throw error;
    }
};*/

export const getUserSales = async (idUser, page=0) => {
    
    try {
        const response = await axiosConf.post(`user/sale/all?page=${page}`, idUser);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las ventas del usuario", error);
        throw error;
    }
};

export const getAllSales = async (page=0) => {
    try {
        const response = await axiosConf.get(`admin/sale/all?page=${page}`);
        return response;
    } catch (error) {
        console.error("Error al obtener todas las ventas", error);
        throw error;
    }
}
