import { FETCH_ENTRANTS, RESET_ENTRANTS } from '../actions';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_ENTRANTS:
      let entrants = action.payload.data.entities.entrants
      let newState = entrants.map(entrant => {
        return {
          name: entrant.name,
          placement: entrant.finalPlacement
        }
      }).sort((a, b) => {
        if (a.placement < b.placement) return -1;
        return 1;
      });
      return newState;
    case RESET_ENTRANTS:
      return [];
    default:
      return state;
  }
}
