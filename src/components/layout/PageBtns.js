import React from 'react';
import PropTypes from 'prop-types';

const PageBtns = ({ totalItems, hasMore, next, fetchData }) => {
  const firstPage = () => {
    window.scrollTo(0, 0);
    fetchData(
      'https://gp-super-store-api.herokuapp.com/item/list?from=0&size=6&sortDir=asc'
    );
  };

  const prevPage = () => {
    window.scrollTo(0, 0);
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?from=${
        next ? next - 13 : totalItems - 11
      }&size=6&sortDir=asc`
    );
  };

  const nextPage = () => {
    window.scrollTo(0, 0);
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?from=${
        next - 1
      }&size=6&sortDir=asc`
    );
  };

  const lastPage = () => {
    window.scrollTo(0, 0);
    fetchData(
      `https://gp-super-store-api.herokuapp.com/item/list?from=${
        totalItems - 5
      }&size=6&sortDir=asc`
    );
  };

  return (
    <nav className='page-btns' aria-label='Page navigation example'>
      <ul className='pagination'>
        <li
          className={
            next < 8 && next != null ? 'page-item disabled' : 'page-item'
          }
        >
          <button className='page-link' onClick={firstPage}>
            First
          </button>
        </li>
        <li
          className={
            next < 8 && next != null ? 'page-item disabled' : 'page-item'
          }
        >
          <button className='page-link' onClick={prevPage}>
            Prev
          </button>
        </li>
        <li className={hasMore ? 'page-item' : 'page-item disabled'}>
          <button className='page-link' onClick={nextPage}>
            Next
          </button>
        </li>
        <li className={hasMore ? 'page-item' : 'page-item disabled'}>
          <button className='page-link' onClick={lastPage}>
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

PageBtns.propTypes = {
  hasMore: PropTypes.bool.isRequired,
  next: PropTypes.number.isRequired,
};

export default PageBtns;
