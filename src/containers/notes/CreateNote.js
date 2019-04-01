import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';
import { createNote, updateTitle, updateBody } from '../../actions/noteForm';
import { getTitle, getBody, getNoteFormError, isNoteFormLoading } from '../../selectors/noteForm';

const mapStateToProps = state => ({
  error: getNoteFormError(state),
  loading: isNoteFormLoading(state),
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
  
