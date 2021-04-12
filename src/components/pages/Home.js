import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from '../layout/Search';
import ItemList from '../items/ItemList';
import PageBtns from '../layout/PageBtns';

const Home = ({ fetchData }) => {
  const [items, setItems] = useState(null);
  const [searchFail, setSearchFail] = useState(false);

  const url = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

  useEffect(() => {
    fetchData(url, setItems);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (items && items.length < 1) {
      setSearchFail(true);
    } else setSearchFail(false);
  }, [items]);

  const onSearch = (query) => {
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&q=${query}`,
      setItems
    );
  };

  return (
    <>
      <main className='main'>
        <Search onSearch={onSearch} />
        <ItemList items={items} />
      </main>
      {items && items.length > 0 && <PageBtns />}
      {searchFail && (
        <h3 className='apology'>Sorry, we didn't find anything...</h3>
      )}
    </>
  );
};

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Home;
