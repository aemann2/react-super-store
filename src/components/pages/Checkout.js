import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className='checkout'>
      <h2>Checkout successful. Thanks for shopping!</h2>
      <Link to={`/`} className='btn btn-primary btn-lg'>
        Back to Home
      </Link>
    </div>
  );
};

export default Checkout;
