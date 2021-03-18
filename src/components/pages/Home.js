import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Items from '../items/Items';

const Home = (props) => {
  const { fetchData } = props;

  const [items, setItems] = useState(null);

  const url = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc';

  useEffect(() => {
    fetchData(url, setItems);
  }, [fetchData]);

  return (
    <main className='main'>
      <Items items={items} />
    </main>
  );
};

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Home;
