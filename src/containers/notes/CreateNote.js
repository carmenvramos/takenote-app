import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';
import { createNote, updateTitle, updateBody } from '../../actions/noteDetails';
import { getTitle, getBody, getNoteDetailsError, isNoteDetailsLoading } from '../../selectors/noteDetails';

const mapStateToProps = state => ({
  error: getNoteDetailsError(state),
  loading: isNoteDetailsLoading(state),
  title: getTitle(state),
  body: getBody(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(title, body, event) {
    event.preventDefault();
    dispatch(createNote({ title, body }));
  },

  titleChange({ target }) {
    dispatch(updateTitle(target.value));
  },

  bodyChange({ target }) {
    dispatch(updateBody(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
  
