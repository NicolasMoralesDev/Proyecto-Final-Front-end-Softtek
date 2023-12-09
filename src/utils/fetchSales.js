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
        }

        const response = await axiosConf.post("user/sales/pay", request);
        location.replace(response.data);

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
