import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.180.97.255/",
});

export default instance;
