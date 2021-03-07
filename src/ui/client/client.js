import DateStore from "../store/habit-date-store";
import DomainStore from "../store/habit-domain-store";
import NodeStore from "../store/habit-node-store";

import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

export default axios;
