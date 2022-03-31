import axios from "axios";

const URL = process.env.REACT_APP_POKEAPI || "https://pokeapi.co/api/v2/";

const axiosInstance = axios.create({
    baseURL: URL,
});

export default axiosInstance;
