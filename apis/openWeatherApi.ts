import axios, { AxiosInstance } from "axios";

export const weatherAPI: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
});
