import axiosConf from "./axiosConf";

export const sendSale = async (sale) => {
    try {
        const response = await axiosConf.post("http://localhost:8080/user/sale/save", sale);
        return response;
    } catch (error) {
        return error;
    }
}

export const payMd = async (sale) => {
    try {
        const response = await axiosConf.post("http://localhost:8080/api/user/sales", sale);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getUserSales = async (idUser) => {
    try {
        const response = await axiosConf.post(`user/sale/all`, idUser);
        return response;
    } catch (error) {
        return error;
    }
}
