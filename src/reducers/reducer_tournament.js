import { FETCH_TOURNAMENT } from '../actions';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_TOURNAMENT:
      if (action.payload.status) {
        let newState = action.payload.data;
        return newState;
      } else {
        let newState = { error: 'Tournament not found' }
        return newState;
      }
    default:
      return state;
  }
}
