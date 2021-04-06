import React from 'react';

const Search = () => {
  return (
    <div className='input-group search'>
      <div className='search--wrapper'>
        <input
          type='text'
          className='form-control search__input'
          aria-label='Text input'
          placeholder='Search'
        />
        <button
          type='button'
          className='btn btn-outline-secondary bg-danger text-light search__clear'
        >
          X
        </button>
        <button
          type='button'
          className='btn btn-outline-secondary bg-info search__run'
        >
          🔍
        </button>
      </div>
    </div>
  );
};

export default Search;
