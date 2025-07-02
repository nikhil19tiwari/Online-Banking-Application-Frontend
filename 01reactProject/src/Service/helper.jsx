import axios from "axios";

const BASE_URL ="http://localhost:9999";

const signUpAxios = axios.create({
baseURL : BASE_URL,
headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

});