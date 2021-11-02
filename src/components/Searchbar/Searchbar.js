import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from 'components/Searchbar/Searchbar.module.css';

export function Searchbar({ getSearchQuery }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    getSearchQuery(searchQuery);
    setSearchQuery('');
  };

  const handleOnChange = e => setSearchQuery(e.target.value);

  return (
    <form className={styles.SearchForm} onSubmit={handleOnSubmit}>
      <input
        className={styles.SearchForm__input}
        value={searchQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleOnChange}
      />
      <button type="submit" className={styles.SearchForm__button}>
        <span className={styles.SearchForm__button__label}>Search</span>
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  getSearchQuery: PropTypes.func,
};
