import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.Header}>
      <h1>
        <Link to="/">TAKE NOTE</Link>
      </h1>
    </header>
  );
}
