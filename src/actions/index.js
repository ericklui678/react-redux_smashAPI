import axios from 'axios';

export const FETCH_TOURNAMENT = 'FETCH_TOURNAMENT';

const ROOT_URL = 'https://cors-anywhere.herokuapp.com/https://api.smash.gg';
const EXPAND_ALL = 'expand[]=event&expand[]=phase&expand[]=groups';

export function fetchTournament(tournament) {
  let url = `${ROOT_URL}/tournament/${tournament}?${EXPAND_ALL}`;
  console.log('action now fetching from', url);
  const request = axios.get(url);

  return {
    type: FETCH_TOURNAMENT,
    payload: request
  }
}

// export function fetchPhase(slug) {
//   let url = `${ROOT_URL}/${slug}?${PHASE}`;
//   console.log(url);
//   const request = axios.get(url);
//
//   return {
//     type: FETCH_PHASE,
//     payload: request
//   }
// }
