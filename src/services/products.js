import axios from "axios";
const baseUrl = "https://cloudcomputers-backend.herokuapp.com/api/products";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const productService = { getAll };

export default productService;
