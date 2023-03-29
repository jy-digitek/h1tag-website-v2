// import axios from "axios";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/featured/actions";

// const instance = axios.create({
//   baseURL: "http://localhost:5000/api/vi",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// if (typeof window !== "undefined") {
//   // Perform localStorage action
//   const token = localStorage.getItem("token");
//   axios.defaults.baseURL = "http://localhost:5000/api/vi";
//   axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

//   // console.log(axios.headers);
// }

// //const token = localStorage.getItem("token");
// //console.log(token);

// export default instance;

// export default axios;

// import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5000/api/vi",
});
instance.defaults.headers.common["Content-Type"] = "multipart/form-data";

//validate response
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const dispatch = useDispatch();
    if (error.response.status === 401 || error.response.status === 403) {
      dispatch(userLogout());

      //return (window.location.href = "/admin");
    }
    return Promise.reject(error);
  }
);

// Set the AUTH token for any request
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
