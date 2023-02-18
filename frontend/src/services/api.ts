import axios from "axios";

// Потом добавить токен
export const useApi = axios.create({
  baseURL: "https://project-sau.herokuapp.com",
  timeout: 60000,
});
