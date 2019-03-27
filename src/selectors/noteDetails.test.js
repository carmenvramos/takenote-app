import { getTitle, getBody, getNoteDetailsError, isNoteDetailsLoading } from './noteDetails';

describe('noteDetails selectors tests', () => {
  let state = {
    noteDetails: {
      title: 'Note Title',
      body: 'Note Body',
      error: { error: 'Notes Error' },
      loading: true
    }
  };

  it('gets a title from state', () => {
    expect(getTitle(state)).toEqual('Note Title');
  });

  it('gets a body from state', () => {
    expect(getBody(state)).toEqual('Note Body');
  });

  it('gets an error from state', () => {
    expect(getNoteDetailsError(state)).toEqual('Notes Error');
  });

  it('gets an error from state when it is a message', () => {
    let state = {
      noteDetails: {
        title: 'Note Title',
        body: 'Note Body',
        error: { message: 'Error Message' },
        loading: true
      }
    };
    expect(getNoteDetailsError(state)).toEqual('Error Message');
  });

  it('gets null when error is null', () => {
    let state = {
      noteDetails: {
        title: 'Note Title',
        body: 'Note Body',
        error: null,
        loading: true
      }
    };
    expect(getNoteDetailsError(state)).toEqual(null);
  });

  it('gets loading from state', () => {
    expect(isNoteDetailsLoading(state)).toEqual(true);
  });
});
