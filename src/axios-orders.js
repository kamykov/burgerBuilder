import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-b7202.firebaseio.com/"
});

export default instance;
