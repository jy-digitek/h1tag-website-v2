import axios from "./index";

export const createCategory = (data) => {
  return axios.post(`category/createcategories`, data);
};

export const gettAllCategory = () => {
  // console.log("axios category");
  return axios.get(`category/getallcategory`);
};

export const updateCategory = (id) => {
  return axios.update(`category/category/${id}`);
};

export const getSingleCategory = (id) => {
  return axios.get(`category/category/${id}`);
};
