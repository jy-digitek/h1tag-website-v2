import axios from "./index";

export const createPost = (data) => {
  return axios.post(`/post/postcreate`, data);
};

export const getPost = (page) => {
  return axios.get(`/post/posts?page=${page}`);
};

export const getPostById = (id) => {
  return axios.get(`/post/${id}`);
};

export const updatePost = async (id, data) => {
  console.log("axios", data);
  return await axios.put(`/post/${id}`, data);
};

// export const deleteUser = (id) => {
//   return instance.delete(`/post/${id}`);
// };
