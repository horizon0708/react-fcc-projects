import { combineReducers } from 'redux';
import simon from './simonReducer';
import tictactoe from './tictactoeReducer';


const rootReducer = combineReducers({
  simon,
  tictactoe
});

export default rootReducer;
