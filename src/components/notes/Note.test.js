import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note tests', () => {
  it('matches a snapshot', () => {
    expect(shallow(
      <Note title="Note Title" body="Note Body" />
    )).toMatchSnapshot();
  });
});
