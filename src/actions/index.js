export const FETCH_TOURNAMENT = 'FETCH_TOURNAMENT';

export function fetchTournament(tournament) {
  console.log('action to fetch tournament data');
  return {
    type: FETCH_TOURNAMENT,
    payload: 'some-data'
  }
}
