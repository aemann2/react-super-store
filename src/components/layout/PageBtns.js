import React from 'react';
import PropTypes from 'prop-types';

const PageBtns = ({ totalItems, hasMore, next, fetchData, paginationURL }) => {
  const firstPage = () => {
    window.scrollTo(0, 0);
    fetchData(paginationURL + '&from=0');
  };

  const prevPage = () => {
    window.scrollTo(0, 0);
    fetchData(paginationURL + `&from=${next ? next - 19 : totalItems - 11}`);
  };

  const nextPage = () => {
    window.scrollTo(0, 0);
    fetchData(paginationURL + `&from=${next - 1}`);
  };

  const lastPage = () => {
    window.scrollTo(0, 0);
    fetchData(
      paginationURL + `&from=${totalItems === next ? next - 1 : totalItems - 2}`
    );
  };

  return (
    <nav className='page-btns' aria-label='Page navigation example'>
      <ul className='pagination'>
        <li
          className={
            (next < totalItems && next > 10) ||
            (next === null && totalItems > 8)
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
            (next < totalItems && next > 10) ||
            (next === null && totalItems > 8)
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
  totalItems: PropTypes.number.isRequired,
  hasMore: PropTypes.bool.isRequired,
  next: PropTypes.number,
  fetchData: PropTypes.func.isRequired,
  paginationURL: PropTypes.string.isRequired,
};

export default PageBtns;
