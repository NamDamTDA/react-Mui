import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const getProducts = () => {
  return instance.get(`/products`);
};
