import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  // state for controlled component
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // if the input changes and is blank, this runs an empty search
  useEffect(() => {
    if (input === '') {
      onSearch(input);
    }
    // eslint-disable-next-line
  }, [input]);

  // clears the search field if "ESC" key is entered
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      clear();
    }
  };

  // runs the onSearch function passed down from the consuming components
  const search = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  function clear() {
    setInput('');
  }

  return (
    <div className='input-group search'>
      <form className='search--wrapper' onSubmit={search}>
        <input
          type='text'
          className='form-control search__input'
          aria-label='Text input'
          placeholder='Search'
          value={input}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <button
          type='button'
          onClick={clear}
          className='btn btn-outline-secondary bg-danger text-light search__clear'
        >
          X
        </button>
        <button
          type='submit'
          className='btn btn-outline-secondary bg-info search__run'
        >
          🔍
        </button>
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
