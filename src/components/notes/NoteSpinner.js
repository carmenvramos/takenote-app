import React from 'react';
import PropTypes from 'prop-types';
import { FaHourglass } from 'react-icons/fa';
import styles from './NoteSpinner.css';

function NoteSpinner({ loading, children }) {
  if(loading) {
    return (
      <span className={styles.spinner}>
        <FaHourglass />
      </span>
    );
  }

  return children;
}

NoteSpinner.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default NoteSpinner;
