import React from 'react';

const PageBtns = () => {
  return (
    <nav className='page-btns' aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <a className='page-link' href=''>
            First
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href=''>
            Prev
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href=''>
            Next
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href=''>
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PageBtns;
