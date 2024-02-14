import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-tablet">
          <a className="menu-tablet" href="/" onClick={toggleMenu}>
            <img src="/assets/shared/tablet/icon-hamburger.svg" alt="audiophile" width="30" height="24" />
          </a>
          <div className={`tablet-menu ${isMenuOpen ? 'close' : ''}`}>
            <Link to="/" onClick={closeMenu}>HOME</Link>
            <Link to="/headphones" onClick={closeMenu}>HEADPHONES</Link>
            <Link to="/speakers" onClick={closeMenu}>SPEAKERS</Link>
            <Link to="/earphones" onClick={closeMenu}>EARPHONES</Link>
          </div>
        </div>
        <div className="container-logo">
            <Link to='/' className="navbar-brand">
            <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" href="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/headphones" className="nav-link" href="/">
                HEADPHONES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/speakers" className="nav-link" href="/">
                SPEAKERS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/earphones" className="nav-link" href="/">
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
        <div className="container-cart">
          <a className="cart-logo" href="/">
            <img src="/assets/shared/desktop/icon-cart.svg" alt="cart"/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
