import { combineReducers } from 'redux';
import notes from './notes';
import noteDetails from './noteDetails';
import noteForm from './noteForm';
import session from './session';

export default combineReducers({
  notes,
  noteForm,
  noteDetails, session
});
