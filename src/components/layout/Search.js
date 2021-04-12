import React, { useState, useEffect } from 'react';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === '') {
      onSearch(input);
    }
  }, [input, onSearch]);

  // clears the search field if "ESC" key is entered
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      clear();
    }
  };

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
