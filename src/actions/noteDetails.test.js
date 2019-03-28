import {
  createNote,
  CREATE_NOTE_FULFILLED,
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_ERROR,
  updateTitle,
  UPDATE_TITLE,
  updateBody,
  UPDATE_BODY,
  clearDetails,
  CLEAR_DETAILS,
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_FULFILLED,
  FETCH_NOTE_DETAILS_ERROR,
  fetchNoteDetails,
  updateNote,
  UPDATE_NOTE,
  UPDATE_NOTE_PENDING,
  UPDATE_NOTE_FULFILLED,
  UPDATE_NOTE_ERROR
  
} from './noteDetails';

jest.mock('../services/notes.js', () => ({
  addNote: () => Promise.resolve(),
  getNote: () => Promise.resolve(),
  editNote: () => Promise.resolve()
}));

describe('noteDetails action creators', () => {
  it('creates a CREATE_NOTE action', () => {
    const action = createNote({ title: 'Note Title', body: 'Note Body' });
    expect(action).toEqual({
      type: CREATE_NOTE,
      pendingType: CREATE_NOTE_PENDING,
      fulfilledType: CREATE_NOTE_FULFILLED,
      rejectedType: CREATE_NOTE_ERROR,
      payload: expect.any(Promise)
    });
  });

  it('creates a UPDATE_NOTE action', () => {
    const action = updateNote({ title: 'Note Title', body: 'Note Body' });
    expect(action).toEqual({
      type: UPDATE_NOTE,
      pendingType: UPDATE_NOTE_PENDING,
      fulfilledType: UPDATE_NOTE_FULFILLED,
      rejectedType: UPDATE_NOTE_ERROR,
      payload: expect.any(Promise)
    });
  });

  it('creates an action to UPDATE_TITLE', () => {
    const action = updateTitle('Updated Title');
    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'Updated Title'
    });
  });

  it('creates an action to UPDATE_BODY', () => {
    const action = updateBody('Updated Note body');
    expect(action).toEqual({
      type: UPDATE_BODY,
      payload: 'Updated Note body'
    });
  });

  it('creates a FETCH_NOTE_DETAILS action', () => {
    const action = fetchNoteDetails('This is the fetched note details');
    expect(action).toEqual({
      type: FETCH_NOTE_DETAILS,
      pendingType: FETCH_NOTE_DETAILS_PENDING,
      fulfilledType: FETCH_NOTE_DETAILS_FULFILLED,
      rejectedType: FETCH_NOTE_DETAILS_ERROR,
      payload: expect.any(Promise)
    });
  });

  it('creates an action to CLEAR_DETAILS', () => {
    const action = clearDetails();
    expect(action).toEqual({
      type: CLEAR_DETAILS
    });
  });
});
