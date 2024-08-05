import axiosClient from './axios-client';
const apiURL = '/auth';

export const authServices = {
  login: params => {
    const url = apiURL;
    return axiosClient.post(url, params);
  }
};
