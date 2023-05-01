import axios from 'axios';

export const fetchTweets = page => {
  return axios.get(
    `https://63c010dde262345656f6b972.mockapi.io/users?page=${page}&limit=3`
  );
};
