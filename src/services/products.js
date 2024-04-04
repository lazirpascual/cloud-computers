import axios from 'axios';
const baseUrl = 'https://cloud-computers-backend.onrender.com/api/products';
// const baseUrl = '/api/products';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const productService = { getAll };

export default productService;
