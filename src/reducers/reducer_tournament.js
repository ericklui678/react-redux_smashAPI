import { FETCH_TOURNAMENT } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TOURNAMENT:
      console.log('got data from tournament in reducer', action.payload);
      return state;
    default:
      return state;
  }
}
