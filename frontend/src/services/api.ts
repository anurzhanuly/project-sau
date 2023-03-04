import axios from "axios";

// Потом добавить токен
export const useApi = axios.create({
  baseURL: "https://project-sau.herokuapp.com",
  timeout: 60000,
});

export const useSymptomApi = axios.create({
  baseURL: "http://symptom.kz",
  // headers: {
  //   "Content-Type": "text/plain",
  //   "Access-Control-Allow-Origin": "*",
  // },
});
