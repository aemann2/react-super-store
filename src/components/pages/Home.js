import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from '../layout/Search';
import ItemList from '../items/ItemList';
import PageBtns from '../layout/PageBtns';

const Home = ({ fetchData }) => {
  const [items, setItems] = useState(null);

  const url = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

  useEffect(() => {
    fetchData(url, setItems);
    // eslint-disable-next-line
  }, []);

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
      {items && <PageBtns />}
    </>
  );
};

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Home;
