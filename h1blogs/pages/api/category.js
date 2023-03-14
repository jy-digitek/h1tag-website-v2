import axios from "./index";

export const createCategory = (data) => {
  return axios.post(`category/createcategories`, data);
};

export const gettAllCategory = () => {
  // console.log("axios category");
  return axios.get(`category/getallcategory`);
};

export const updateCategory = (id, data) => {
  return axios.update(`category/category/${id}`, data);
};

export const getSingleCategory = (id) => {
  return axios.get(`category/category/${id}`);
};

export const deleteCategory = (id) => {
  return axios.delete(`category/category/${id}`);
};

export const login = async (loginData) => {
  const data = await axios.post(`/user/login`, loginData);
  // console.log("login aPI", data);
  return data;
};
