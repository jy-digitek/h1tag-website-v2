import axios from "./index";

export const createPost = () => {
  return axios.post(`postcreate`);
};

export const getPost = (page) => {
  return axios.get(`/post/posts?page=${page}`);
};

export const getPostById = (id) => {
  return axios.get(`/post/${id}`);
};

export const updatePost = (id, data) => {
  return axios.put(`/post/${id}`, data);
};

export const deleteUser = (id) => {
  return axios.delete(`/post/${id}`);
};
