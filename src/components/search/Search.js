import React, { useState } from 'react';

const Search = (props) => {
  const { fetchData } = props;
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState(null);

  // note: use the q? endpoint for the search
  // the search itself should be handled in the Search component. Don't worry about the "Consuming components" thing

  const url = `https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&q=${input}`;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      clear();
    }
  };

  const search = (e) => {
    e.preventDefault();
    fetchData(url, setSearchData);
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
