import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note tests', () => {
  it('matches a snapshot', () => {
    const note = {
      _id: '11',
      author: 'test.user',
      title: 'Note Title',
      body: 'Note Body'
    };
    expect(shallow(
      <Note note={note} />
    )).toMatchSnapshot();
  });
});
