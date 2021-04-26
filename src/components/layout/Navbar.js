import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import store from './store.svg';

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const itemQuantities = cart.map((item) => item.quantity);

  const totalItems = itemQuantities.reduce((cur, acc) => (cur += acc), 0);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <NavLink to='/' className='navbar-brand' href='/'>
        <img
          src={store}
          width='30'
          height='30'
          alt=''
          className='d-inline-block align-top'
        />
        <span style={{ marginLeft: '1rem' }}>Super Store</span>
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink to='/' className='nav-item nav-link'>
            Home
          </NavLink>
          <NavLink to='/deals' className='nav-item nav-link'>
            Deals
          </NavLink>
          <NavLink to='/cart' className='nav-item nav-link'>
            Cart
            {cart.length > 0 && (
              <span className='badge badge-danger navbar__badge'>
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
