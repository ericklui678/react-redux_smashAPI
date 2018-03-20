import { combineReducers } from 'redux';
import TournamentReducer from './reducer_tournament';
import EntrantReducer from './reducer_entrants';

const rootReducer = combineReducers({
  tournament: TournamentReducer,
  entrants: EntrantReducer
});

export default rootReducer;
