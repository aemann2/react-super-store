import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../items/ItemList';
import Search from '../layout/Search';
import PageBtns from '../layout/PageBtns';

const Deals = ({ fetchData }) => {
  const [deals, setDeals] = useState(null);
  // url that filters for on sale items
  const url =
    'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&isOnSale=true';

  useEffect(() => {
    fetchData(url, setDeals);
    // eslint-disable-next-line
  }, []);

  const onSearch = (query) => {
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&isOnSale=true&q=${query}`,
      setDeals
    );
  };

  return (
    <>
      <main className='main'>
        <Search onSearch={onSearch} />
        <ItemList items={deals} />
      </main>
      {deals && <PageBtns />}
    </>
  );
};

Deals.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Deals;
