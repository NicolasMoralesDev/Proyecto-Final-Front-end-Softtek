import axiosConf from "./axiosConf";

export const sendSale = async (sale) => {
    try {
        const response = await axiosConf.post("user/sale/save", sale);
        return response;
    } catch (error) {
        return error;
    }
}

export const getUserSales = async (idUser) => {
    try {
        const response = await axiosConf.get(`user/sale/${idUser}`);
        return response;
    } catch (error) {
        return error;
    }
}
