import axios from "axios";
const url = "http://localhost:8000/api/v1/users";

const userInstance = axios.create({
  baseURL: url,
});

export const signInUser = async (user) => {
  const response = await userInstance.post(`/signin`, user);
  return response.data;
};

export const signUpUser = async (user) => {
  const response = await userInstance.post(`/signup`, user);
  return response.data;
};

export const signOutUser = async (user) => {
  const response = await userInstance.post(`/signout`);
  return response.data;
};
