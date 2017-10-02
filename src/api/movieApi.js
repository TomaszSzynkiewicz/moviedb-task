import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd114b35894418b7fc95dc35f1cba6493';
const language = 'en-US';

const movieApi = {
  find({ title }) {
    return axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language,
        page: 1,
        include_adult: false,
        query: title
      }
    });
  }
};

export default movieApi;
