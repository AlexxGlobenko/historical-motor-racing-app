import { combineReducers } from 'redux';
import { drivers } from './drivers/drivers.reducer';
import { races } from './races/races.reducer';

const rootReducer = combineReducers({
  drivers,
  races,
});


export default rootReducer;
