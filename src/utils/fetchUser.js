import axiosConf from "./axiosConf";

export const loginRequest = async (data) => {
  try {
    const response = await axiosConf.post(`public/auth/login`, data);  
    return response.data
  } catch (error) {
    return error
  }
}

export const registerRequest = async (data) => {
  try {
    const response = await axiosConf.post(`public/auth/register`, data);
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}

/**
 * This method is used to provide the "change password" functionality. In order to use it, the user must be logged in.
 * data: {
 *  idUser: the id of the user
 *  currentPassword: the current password of the user
 *  newPassword: the new password of the user
 *  confirmationPassword: the new password of the user
 * }
 * @param {*} data 
 * @returns 
 */
export const changePasswordRequest = async (data) => {
  try {
    const response = await axiosConf.put(`user/password`, data);
    return response
  } catch (error) {
    return error
  }
}