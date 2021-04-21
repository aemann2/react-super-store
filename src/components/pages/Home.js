import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../layout/Search';
import ItemList from '../items/ItemList';
import PageBtns from '../layout/PageBtns';
import { pageSize } from '../../utils/constants';

const Home = () => {
  const [items, setItems] = useState(null);
  const [searchFail, setSearchFail] = useState(false);
  // state data for pagination
  const [totalItems, setTotalItems] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [next, setNext] = useState(null);

  const url = `https://gp-super-store-api.herokuapp.com/item/list?from=0&size=${pageSize}&sortDir=asc`;

  // a pagination URL that gets passed to the PageBtns component
  const paginationURL = `https://gp-super-store-api.herokuapp.com/item/list?size=${pageSize}&sortDir=asc`;

  const fetchData = async (endpoint) => {
    await axios
      .get(endpoint)
      .then((response) => {
        setItems(response.data.items);
        setTotalItems(response.data.total);
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
    //eslint-disable-next-line
  }, []);

  // whenever the 'items' state changes, this function checks to see whether the array is 0. if so, setSearchFail gets set to true, else false.
  useEffect(() => {
    if (items && items.length < 1) {
      setSearchFail(true);
    } else setSearchFail(false);
  }, [items]);

  // onSeach function to be passed down to the Search component
  const onSearch = (query) => {
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?from=0&size=${pageSize}&sortDir=asc&q=${query}`
    );
  };

  return (
    <>
      <main className='main'>
        <Search onSearch={onSearch} />
        <ItemList items={items} />
      </main>
      {/* conditionally renders page buttons if items return and is not an empty array, else an apology is rendered */}
      {items && items.length > 0 && (
        <PageBtns
          totalItems={totalItems}
          hasMore={hasMore}
          next={next}
          fetchData={fetchData}
          paginationURL={paginationURL}
          pageSize={pageSize}
        />
      )}
      {searchFail && (
        <h3 className='apology'>Sorry, we didn't find anything...</h3>
      )}
    </>
  );
};

export default Home;
