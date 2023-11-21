import axios, { HttpStatusCode } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
// 기본 API 요청 처리
const axiosApi = (baseURL: any) => {
  const instance = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
    },
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
