import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Items from '../items/Items';

const Deals = (props) => {
  const { fetchData } = props;
  const [deals, setDeals] = useState(null);
  // url that filters for on sale items
  const url =
    'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&isOnSale=true';

  useEffect(() => {
    fetchData(url, setDeals);
  }, [fetchData]);

  return (
    <main className='main'>
      <Items items={deals} />
    </main>
  );
};

Deals.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Deals;
