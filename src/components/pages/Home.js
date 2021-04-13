import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../layout/Search';
import ItemList from '../items/ItemList';
import PageBtns from '../layout/PageBtns';

const Home = () => {
  const [items, setItems] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [next, setNext] = useState(null);
  const [searchFail, setSearchFail] = useState(false);

  const url =
    'https://gp-super-store-api.herokuapp.com/item/list?from=0&size=6&sortDir=asc';

  const fetchData = async (endpoint) => {
    await axios
      .get(endpoint)
      .then((response) => {
        setItems(response.data.items);
        setHasMore(response.data.hasMore);
        setNext(response.data.next);
      })
      // using proper error handling
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log('There has been an error');
        }
      });
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  // whenever the 'items' state changes, this function checks to see whether the array is 0. if so, setSearchFail gets set to true, else false.
  useEffect(() => {
    if (items && items.length < 1) {
      setSearchFail(true);
    } else setSearchFail(false);
  }, [items]);

  const onSearch = (query) => {
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?from=0&size=6&sortDir=asc&q=${query}`
    );
  };

  return (
    <>
      <main className='main'>
        <Search onSearch={onSearch} />
        <ItemList items={items} />
      </main>
      {/* conditionally renders page buttons if items return and is not an empty array, else an apology is rendered */}
      {items && items.length > 0 && <PageBtns hasMore={hasMore} next={next} />}
      {searchFail && (
        <h3 className='apology'>Sorry, we didn't find anything...</h3>
      )}
    </>
  );
};

export default Home;
