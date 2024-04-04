import axios from 'axios';
const baseUrl = 'https://cloud-computers-backend.onrender.com/api/users';
// const baseUrl = '/api/users';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const signup = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { getAll, signup };
