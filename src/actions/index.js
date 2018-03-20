import axios from 'axios';

export const FETCH_TOURNAMENT = 'FETCH_TOURNAMENT';
export const FETCH_ENTRANTS = 'FETCH_ENTRANTS';
export const RESET_ENTRANTS = 'RESET_ENTRANTS';

const ROOT_URL = 'https://cors-anywhere.herokuapp.com/https://api.smash.gg';
const EXPAND_ALL = 'expand[]=event&expand[]=phase&expand[]=groups';
const ENTRANTS = 'expand[]=entrants';

export function fetchTournament(tournament) {
  let url = `${ROOT_URL}/tournament/${tournament}?${EXPAND_ALL}`;
  console.log('fetching ', url);
  const request = axios.get(url);

  return {
    type: FETCH_TOURNAMENT,
    payload: request
  }
}

export function fetchEntrants(group_id) {
  let url = `${ROOT_URL}/phase_group/${group_id}?${ENTRANTS}`;
  console.log('fetching entrants from action ', url);
  const request = axios.get(url);

  return {
    type: FETCH_ENTRANTS,
    payload: request
  }
}

export function resetEntrants() {
  return {
    type: RESET_ENTRANTS,
    payload: []
  }
}
