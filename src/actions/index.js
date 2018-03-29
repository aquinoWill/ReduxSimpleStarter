import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=Postwill'

export function fetchPosts() {

  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  }
}
