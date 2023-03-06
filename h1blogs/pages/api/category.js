import axios from "axios";

export const createCategory = (data) => {
  return axios.post(`category/createcategories`);
};
