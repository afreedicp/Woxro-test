import React from 'react';
import { NavStyles } from './styles';

const Navbar = () => {
  return (
    <NavStyles>
      <div className='navbarContainer'>
        <div className='navContent'>
          <button type='button'>Home</button>{' '}
          <button type='button'>About us</button>{' '}
          <button type='button'>Services</button>{' '}
          <button type='button'>Technology</button>
          <button type='button'>Careers</button>{' '}
          <button type='button'>Blogs</button>{' '}
          <button type='button'>Our Works</button>{' '}
          <button type='button'>Contact us</button>
        </div>{' '}
      </div>
    </NavStyles>
  );
};

export default Navbar;
