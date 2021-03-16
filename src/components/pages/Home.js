import React from 'react';
import Items from '../items/Items';

const Home = (props) => {
  const { items } = props;

  return (
    <main className='main'>
      <Items items={items} />
    </main>
  );
};

export default Home;
