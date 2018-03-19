import { combineReducers } from 'redux';
import TournamentReducer from './reducer_tournament';

const rootReducer = combineReducers({
  tournament: TournamentReducer
});

export default rootReducer;
