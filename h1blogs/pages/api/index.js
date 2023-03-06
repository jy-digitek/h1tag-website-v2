// import axios from "axios";
import axios from "axios";
// const instance = axios.create({
//   baseURL: "http://localhost:5000/api/vi",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
if (typeof window !== "undefined") {
  // Perform localStorage action
  const token = localStorage.getItem("token");
  axios.defaults.baseURL = "http://localhost:5000/api/vi";
  axios.defaults.headers.common = { Authorization: `${token}` };

  console.log(axios.headers);
}

// //const token = localStorage.getItem("token");
// //console.log(token);

// export default instance;

export default axios;
