import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

const axiosQueryInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// axiosInstance.interceptors.request.use(config => {

// }, error => Promise.reject(error));

// axiosInstance.interceptors.response.use(response => {

// }, error => {

// });

// axiosQueryInstance.interceptors.request.use(config => {

// }, error => {

// });

// axiosQueryInstance.interceptors.response.use(response => {

// }, error => {

// });

export { axiosInstance, axiosQueryInstance };
