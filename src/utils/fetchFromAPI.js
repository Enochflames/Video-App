import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': "9d0d10ffd3msh01e8d006be13083p18a4dfjsnbadc4496fc67",
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}