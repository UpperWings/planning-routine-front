import React from 'react';
import SerachBar from '../SearchBar/SearchBar';

import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header() {
  return(
    <header className="header">
      <div className="container">
        <SerachBar />
        <CartButton />
      </div>
    </header>
  );  
}

export default Header;
