import axios from "axios";
import { error } from "console";
const base_url = "http://localhost:8080/api/v1/users/";

//using axios to hit backend springboot services
const registerUser = async (user: any) => {
  return axios
    .post(`${base_url}register`, user)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const loginUsers = async (login: any) => {
  return axios
    .post(`${base_url}login`, login)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const sendOtp = async (email: any) => {
  return axios
    .post(`${base_url}sendOtp/${email}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

const verifyOtp = async (email: any, otp: any) => {
  return axios
    .get(`${base_url}verifyOtp/${email}/${otp}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

const changePassword = async (email: string, password: string) => {
  return axios
    .post(`${base_url}changePassword`, { email, password })
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};
export { registerUser, loginUsers, sendOtp, verifyOtp, changePassword };
