import React from 'react';
import PropTypes from 'prop-types';

const PageBtns = ({ hasMore, next }) => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className='page-btns' aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className={next < 8 ? 'page-item disabled' : 'page-item'}>
          <button className='page-link' onClick={onClick}>
            First
          </button>
        </li>
        <li className={next < 8 ? 'page-item disabled' : 'page-item'}>
          <button className='page-link' onClick={onClick}>
            Prev
          </button>
        </li>
        <li className={hasMore ? 'page-item' : 'page-item disabled'}>
          <button className='page-link' onClick={onClick}>
            Next
          </button>
        </li>
        <li className={hasMore ? 'page-item' : 'page-item disabled'}>
          <button className='page-link' onClick={onClick}>
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
