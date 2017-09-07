import { combineReducers } from 'redux';
import simon from './simonReducer';
import tictactoe from './tictactoeReducer';
import twitch from './twitchReducer';

const rootReducer = combineReducers({
  simon,
  tictactoe,
  twitch
});

export default rootReducer;
