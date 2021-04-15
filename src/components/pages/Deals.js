import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../items/ItemList';
import Search from '../layout/Search';
import PageBtns from '../layout/PageBtns';

const Deals = () => {
  const [deals, setDeals] = useState(null);
  const [searchFail, setSearchFail] = useState(false);
  // state data for pagination
  const [totalItems, setTotalItems] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [next, setNext] = useState(null);

  // url that filters for on sale items
  const url =
    'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&size=9&isOnSale=true';

  const fetchData = async (endpoint) => {
    await axios
      .get(endpoint)
      .then((response) => {
        setDeals(response.data.items);
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
  }, []);

  // whenever the 'deals' state changes, this function checks to see whether the array is 0. if so, setSearchFail gets set to true, else false.
  useEffect(() => {
    if (deals && deals.length < 1) {
      setSearchFail(true);
    } else setSearchFail(false);
  }, [deals]);

  // onSeach function to be passed down to the Search component
  const onSearch = (query) => {
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&size=9&isOnSale=true&q=${query}`
    );
  };

  return (
    <>
      <main className='main'>
        <Search onSearch={onSearch} />
        <ItemList items={deals} />
      </main>
      {/* conditionally renders page buttons if deals return and is not an empty array, else an apology is rendered */}
      {deals && deals.length > 0 && (
        <PageBtns
          hasMore={hasMore}
          totalItems={totalItems}
          next={next}
          fetchData={fetchData}
          paginationURL={url}
        />
      )}
      {searchFail && (
        <h3 className='apology'>Sorry, we didn't find anything...</h3>
      )}
    </>
  );
};

export default Deals;
