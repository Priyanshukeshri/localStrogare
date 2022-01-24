import { combineReducers } from 'redux';
import contactReducer from './reducers/contactReducer';
import noteReducer from './reducers/noteReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  notes: noteReducer,
});

export default rootReducer;
