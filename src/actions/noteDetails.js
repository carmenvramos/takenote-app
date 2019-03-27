import { createAction } from 'promise-middleware-redux';
import { addNote, getNote } from '../services/notes';

export const [
  createNote,
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_FULFILLED,
  CREATE_NOTE_ERROR
] = createAction('CREATE_NOTE', addNote);

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});

export const UPDATE_BODY = 'UPDATE_BODY';
export const updateBody = body => ({
  type: UPDATE_BODY,
  payload: body
});

export const [
  fetchNoteDetails,
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_FULFILLED,
  FETCH_NOTE_DETAILS_ERROR
] = createAction('FETCH_NOTE_DETAILS', getNote);
  
