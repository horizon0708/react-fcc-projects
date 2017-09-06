import { combineReducers } from 'redux';
import simon from './simonReducer';


const rootReducer = combineReducers({
  simon,
});

export default rootReducer;
