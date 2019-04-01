import reducer from './noteDetails';
import {
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_ERROR,
  CLEAR_DETAILS
} from '../actions/noteDetails';

jest.mock('../services/auth.js');
jest.mock('../services/notes.js');

describe('noteDetails reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      title: 'Note Title',
      body: 'Fetched note body'
    };
  });

  it('handles the FETCH_NOTE_DETAILS', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTE_DETAILS,
      payload: { title: 'Note Title', body: 'Fetched note body' }
    });

    expect(updatedState).toEqual({
      ...state,
      note: {
        title: 'Note Title',
        body: 'Fetched note body'
      },
      loading: false
    });
  });

  it('handles the FETCH_NOTE_DETAILS_PENDING', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTE_DETAILS_PENDING,
    });

    expect(updatedState).toEqual({
      ...state,
      loading: true
    });
  });

  it('handles the FETCH_NOTE_DETAILS_ERROR', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTE_DETAILS_ERROR,
      payload: 'error message'
    });

    expect(updatedState).toEqual({
      ...state,
      error: 'error message'
    });
  });

  it('handles the CLEAR_DETAILS', () => {
    const updatedState = reducer(state, {
      type: CLEAR_DETAILS,
    });

    expect(updatedState).toEqual({
      note: {},
      error: null,
      loading: false
    });
  });

});
