import {
  getNotes,
  getNotesSummary,
  isNotesLoading,
  getNotesError
} from './notes';

describe('notes selectors tests', () => {
  let state = {
    notes: {
      error: { error: 'Notes error' },
      loading: true,
      list: [
        { title: 'Note Title', body: 'Note body' },
        { title: 'Note Title', body: 't'.repeat(100) },
      ]
    }
  };

  it('gets all notes', () => {
    expect(getNotes(state)).toEqual([
      { title: 'Note Title', body: 'Note body' },
      { title: 'Note Title', body: 't'.repeat(100) },
    ]);
  });

  it('gets all notes summaries', () => {
    expect(getNotesSummary(state)).toEqual([
      { title: 'Note Title', body: 'Note body' },
      { title: 'Note Title', body: 't'.repeat(50) + '...' },
    ]);    
  });

  it('gets a notes loading state', () => {
    expect(isNotesLoading(state)).toEqual(true);
  });

  it('gets a notes error', () => {
    expect(getNotesError(state)).toEqual('Notes error');
  });

  it('gets a notes error when it is a message', () => {
    let state = {
      notes: {
        error: { message: 'Error message' }
      }
    };
    expect(getNotesError(state)).toEqual('Error message');
  });

  it('returns null when error is null', () => {
    let state = {
      notes: {
        error: null
      }
    };
    expect(getNotesError(state)).toEqual(null);
  });
});
