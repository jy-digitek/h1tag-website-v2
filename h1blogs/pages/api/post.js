import axios from "./index";

export const createPost = (data) => {
  return axios.post(`/post/postcreate`, data);
};

//post/posts?serchQuery=abcred&page=1
//serchQuery=a&page=1
export const getPost = (page, querySearch) => {
  const ans = axios.get(`/post/posts?searchQuery=${querySearch}&page=${page}`);
  console.log("ans", ans);
  return ans;
};

export const getPostById = ({ slug }) => {
  return axios.get(`/post/${slug}`);
};

export const updatePost = (id, data) => {
  console.log("axios", data);
  return axios.put(`/post/${id}`, data);
};

export const postVisible = async (id) => {
  console.log("apiid", id);
  const data = await axios.put(`/post/visible/${id}`);
  console.log("apiresponse", data);
  return data;
};

export const postDelete = (id) => {
  console.log("deleteApi", id);
  return axios.delete(`/post/${id}`);
};
