import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PageBtns = ({
  totalItems,
  hasMore,
  next,
  fetchData,
  paginationURL,
  pageSize,
}) => {
  // a variable to keep track of the previous page
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    setPrev(
      next
        ? next - pageSize * 2 - 1
        : totalItems - (pageSize + (totalItems % pageSize))
    );
  }, [next, pageSize, totalItems]);

  // Functions for pagination

  const firstPage = () => {
    window.scrollTo(0, 0);
    fetchData(paginationURL + '&from=0');
  };

  const prevPage = () => {
    window.scrollTo(0, 0);
    fetchData(paginationURL + `&from=${prev}`);
  };

  const nextPage = () => {
    window.scrollTo(0, 0);
    fetchData(paginationURL + `&from=${next - 1}`);
  };

  const lastPage = () => {
    window.scrollTo(0, 0);
    fetchData(
      paginationURL +
        `&from=${
          totalItems === next ? next - 1 : totalItems - (totalItems % pageSize)
        }`
    );
  };

  return (
    <nav className='page-btns' aria-label='Page navigation example'>
      <ul className='pagination'>
        <li
          className={
            next > pageSize + 1 || next === null
              ? 'page-item'
              : 'page-item disabled'
          }
        >
          <button className='page-link' onClick={firstPage}>
            First
          </button>
        </li>
        <li
          className={
            next > pageSize + 1 || next === null
              ? 'page-item'
              : 'page-item disabled'
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
  totalItems: PropTypes.number,
  hasMore: PropTypes.bool.isRequired,
  next: PropTypes.number,
  fetchData: PropTypes.func.isRequired,
  paginationURL: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default PageBtns;
