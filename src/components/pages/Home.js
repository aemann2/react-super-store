import React from 'react';
import PropTypes from 'prop-types';
import Items from '../items/Items';

const Home = (props) => {
  const { items } = props;

  return (
    <main className='main'>
      <Items items={items} />
    </main>
  );
};

Home.propTypes = {
  items: PropTypes.array,
};

export default Home;
