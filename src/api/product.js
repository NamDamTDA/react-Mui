import instance from "./instance";

const url = `/products`;

export const getListProducts = () => {
  return instance.get(url);
};

export const getProduct = (id) => {
  return instance.get(`${url}/${id}`);
};

export const searchProduct = (keyword) => {
  return instance.get(`${url}?name_like=${keyword}`);
};
