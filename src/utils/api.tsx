//import axios
import axios from "axios";

//variable to handle webhook url
const WEBHOOK_URL = "http://localhost:5678/webhook/Feedback";

//variable to handle api
const api = axios.create({
  baseURL: WEBHOOK_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
