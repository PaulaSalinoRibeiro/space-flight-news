import axios from 'axios';

export const fetchApi = async (endpoit: string) => {
  const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/';
  try {
    const { data } = await axios(`${BASE_URL}${endpoit}`);
    return data;
  } catch (error: any) {
    console.log('Error fetch api', error.message);
    return null
  }
}