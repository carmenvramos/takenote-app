import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import styles from './Note.css';

function Note({ note }) {
  const { _id, title, body, author } = note;
  return (
    <article className={styles.Note}>
      <h2>{title}</h2>
      <h5>by {author}</h5>
      <p>{body}</p>
      <Link to={`/notes/${_id}/edit`}>
        <FaPen />
      </Link>
    </article>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
