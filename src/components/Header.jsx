import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

import './Header.css'

const Header = ({ loggedIn, handleLogout }) => {
  return (
    <header className='header'>
      <h1 className='heading'>ECOMMERCE</h1>
      <nav className='nav'>
        <ul>
          <li>
            Categories
          </li>
          <li>
             Sale
          </li>
          <li>
           Clearance
          </li>
          <li>
             New Stock
          </li> 
          <li>
            Trending
          </li>         
        </ul>
      </nav>
      <div className="others">
        <IoCartOutline />
        <FaMagnifyingGlass />
      </div>
    </header>
  );
};

export default Header;
