import { FETCH_TOURNAMENT } from '../actions';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_TOURNAMENT:
      if (action.payload.status) {
        let newState = action.payload.data;
        return newState;
      } else {
        console.log('404: Tournament not found');
        return state;
      }
    default:
      return state;
  }
}
