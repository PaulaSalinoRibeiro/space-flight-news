import axios from 'axios';

export const fetchApi = async () => {
  try {
    const { data } = await axios('https://api.spaceflightnewsapi.net/v3/articles');
    return data;
  } catch (error: any) {
    console.log('Error fetch api', error.message);
    return null
  }
}