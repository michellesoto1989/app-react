import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header>
      <ul className='header'>
        <li>
          <NavLink to='/norte' activeClassName='activeLink'>
            Norte
          </NavLink>
        </li>
        <li className='logo'>
          <NavLink to='/' end>
            Logo
          </NavLink>
        </li>
        <NavLink to='/nordeste' activeClassName='activeLink'>
          Norte
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
