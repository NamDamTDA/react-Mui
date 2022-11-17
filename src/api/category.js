import instance from "./instance";

const url = `/categories`;

export const createCategory = (category) => {
  return instance.post(url, category);
};

export const readCategory = () => {
  return instance.get(url + "?_embed=products");
};

export const updateCategory = (category) => {
  return instance.put(`${url}/${category.id}`, category);
};

export const destroyCategory = (id) => {
  return instance.delete(`${url}/${id}`);
};

export const getOneCategory = (id) => {
  return instance.get(`${url}/${id}?_embed=products`);
};
