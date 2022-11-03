import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const getListProducts = () => {
  return instance.get(`/products`);
};

export const getProduct = (id) => {
  return instance.get(`/products/${id}`);
};
