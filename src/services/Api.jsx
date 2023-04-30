import axios from 'axios';

export const fetchContacts = async page => {
  const response = await axios.get(
    `https://63c010dde262345656f6b972.mockapi.io/users?page=${page}&limit=3`
  );
  return response.data;
};
