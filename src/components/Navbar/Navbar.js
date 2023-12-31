import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-tablet">
          <a className="menu-tablet" href="/" onClick={toggleMenu}>
            <img src="/assets/shared/tablet/icon-hamburger.svg" alt="audiophile" width="30" height="24" />
          </a>
          <div className={`tablet-menu ${isMenuOpen ? 'close' : ''}`}>
            <a href="/">HOME</a>
            <a href="/headphones">HEADPHONES</a>
            <a href="/speakers">SPEAKERS</a>
            <a href="/earphones">EARPHONES</a>
          </div>
        </div>
        <div className="container-logo">
          <a className="navbar-brand" href="/">
            <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                HEADPHONES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                SPEAKERS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                EARPHONES
              </a>
            </li>
          </ul>
        </div>
        <div className="container-cart">
          <a className="cart" href="/">
            <img src="/assets/shared/desktop/icon-cart.svg" alt="audiophile"/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
