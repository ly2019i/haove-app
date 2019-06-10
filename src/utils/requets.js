import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.cat-shop.penkuoer.com",
  timeout: 5000
});
export const get = (url, config) => instance.get(url, config);

export const post = (url, data, config) => instance.post(url, data, config);

export const del = (url, config) => instance.delete(url, data, config);

export const put = (url, data, config) => instance.put(url, data, config);
