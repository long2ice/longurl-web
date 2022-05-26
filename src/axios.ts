import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_LONGURL_SERVER || "http://localhost:3000",
});
