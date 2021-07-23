import axios from "axios";
const baseUrl = "https://cloudcomputers.herokuapp.com/api/users";
// const baseUrl = "/api/users";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getAll };
