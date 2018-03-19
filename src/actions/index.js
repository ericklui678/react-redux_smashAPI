import axios from 'axios';

export const FETCH_TOURNAMENT = 'FETCH_TOURNAMENT';

const ROOT_URL = 'https://api.smash.gg';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com';
const EXPAND_ALL = 'expand[]=event&expand[]=phase&expand[]=groups';

export function fetchTournament(tournament) {
  let url = `${CORS_PROXY}/${ROOT_URL}/tournament/${tournament}?${EXPAND_ALL}`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_TOURNAMENT,
    payload: request
  }
}
