import axios from 'axios';
import { FETCH_URL } from '../constants';

export const fetcher = (inputUrl: string) =>
  axios.get(FETCH_URL, { params: { url: inputUrl } }).then((res) => res.data);
