import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.125.88/",
  withCredentials: true,
});

export default instance;
