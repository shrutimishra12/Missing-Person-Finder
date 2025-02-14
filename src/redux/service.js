import axios from 'axios';
import { setDummyData } from './dummySlice';

export const fetchDummyData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Example API
    dispatch(setDummyData(response.data));
  } catch (error) {
    console.error('Error fetching dummy data:', error);
  }
};