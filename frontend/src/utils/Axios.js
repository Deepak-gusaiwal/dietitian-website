import axios from "axios";
import { apiBaseUrl } from "./Constat";

export const Axios = axios.create({
  baseURL: `${apiBaseUrl}/api/`,
  withCredentials: true
});
