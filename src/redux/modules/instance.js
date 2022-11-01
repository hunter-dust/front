import axios from "axios";

const instance = axios.create({
  baseURL: "example",
});

export default instance;
