import axios from "axios";
import { handleAndRethrow } from "../assets/scripts/utilities";

axios.defaults.baseURL = "http://127.0.0.1:3000/api";
axios.defaults.headers.common["Accept"] = "application/json;charset=utf-8";
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";

  // Indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  axios.defaults.withCredentials = true;

let clientRoutes = function (basePath) {
  return {
    show_all: () => axios.get(basePath),
    show_one: (id) => axios.get(`${basePath}/${id}`),
    create: (attrs) => axios.post(basePath, JSON.stringify(attrs)),
    delete: (id) => axios.delete(`${basePath}/${id}`),
    replace: (id, update) => axios.put(`${basePath}/${id}`, update),
    update: (id, update) => axios.patch(`${basePath}/${id}`, update),
  };
};

export { clientRoutes, handleAndRethrow };
