import {
  getTitle,
  getBody,
  getNoteFormError,
  isNoteFormLoading
} from './noteForm';

describe('noteDetails selectors', () => {
  let state = {
    noteForm: {
      title: 'Note Title',
      body: 'Note Body',
      error: { error: 'Note Error' },
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
    expect(getNoteFormError(state)).toEqual('Note Error');
  });

  it('gets an error from state when it is a message', () => {
    let state = {
      noteForm: {
        title: 'Note Title',
        body: 'Note Body',
        error: { message: 'Note Error' },
        loading: true
      }
    };
    expect(getNoteFormError(state)).toEqual('Note Error');
  });

  it('gets null when error is null', () => {
    let state = {
      noteForm: {
        title: 'Note Title',
        body: 'Note Body',
        error: null,
        loading: true
      }
    };
    expect(getNoteFormError(state)).toEqual(null);
  });

  it('gets loading from state', () => {
    expect(isNoteFormLoading(state)).toEqual(true);
  });
});
