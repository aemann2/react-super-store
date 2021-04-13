import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from '../layout/Search';
import ItemList from '../items/ItemList';
import PageBtns from '../layout/PageBtns';

const Home = ({ fetchData }) => {
  const [items, setItems] = useState(null);
  const [searchFail, setSearchFail] = useState(false);

  const url =
    'https://gp-super-store-api.herokuapp.com/item/list?from=0&size=6&sortDir=asc';

  useEffect(() => {
    fetchData(url, setItems);
    // eslint-disable-next-line
  }, []);

  // whenever the 'items' state changes, this function checks to see whether the array is 0. if so, setSearchFail gets set to true, else false.
  useEffect(() => {
    if (items && items.length < 1) {
      setSearchFail(true);
    } else setSearchFail(false);
  }, [items]);

  const onSearch = (query) => {
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?from=0&size=6&sortDir=asc&q=${query}`,
      setItems
    );
  };

  return (
    <>
      <main className='main'>
        <Search onSearch={onSearch} />
        <ItemList items={items} />
      </main>
      {/* conditionally renders page buttons if items return and is not an empty array, else an apology is rendered */}
      {items && items.length > 0 && <PageBtns page={items} />}
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
