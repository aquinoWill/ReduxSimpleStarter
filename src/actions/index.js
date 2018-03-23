import axios from 'axios';

const API_KEY = '17bf37cd6af4f08ef5d14f59d2306fce';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeader(city) {

  const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}


// http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=17bf37cd6af4f08ef5d14f59d2306fce
