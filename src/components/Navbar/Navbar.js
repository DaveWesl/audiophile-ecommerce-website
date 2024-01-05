import React from 'react';
import './Navbar.css';

function Navbar() {
  return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/assets/shared/desktop/logo.svg" alt="audiophile" width="30" height="24" />
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
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/assets/shared/desktop/icon-cart.svg" alt="audiophile" width="30" height="24" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
