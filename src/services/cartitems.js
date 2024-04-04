import axios from 'axios';
const baseUrl = 'https://cloud-computers-backend.onrender.com/api/cartitems';
// const baseUrl = '/api/cartitems';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const create = async (newObject) => {
  const request = await axios.post(baseUrl, newObject);
  return request.data;
};

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject);
  return request.data;
};

const remove = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`);
  return request.data;
};

const cartService = { getAll, create, update, remove };

export default cartService;
