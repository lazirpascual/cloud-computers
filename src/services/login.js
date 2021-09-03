import axios from "axios";
const baseUrl = "https://cloudcomputers-pg.herokuapp.com/api/login";
//const baseUrl = "/api/login";

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
