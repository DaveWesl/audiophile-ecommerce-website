import React, { useState } from 'react';
import './Navbar.css';
import './Cart.css'
import { Link } from 'react-router-dom';

function Navbar({ onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeAll = () => {
    closeMenu();
    setIsCartOpen(false);
  };

  return ( 
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-tablet">
            <a className="menu-tablet" href="/" onClick={toggleMenu}>
              <img src="/assets/shared/tablet/icon-hamburger.svg" alt="audiophile" width="30" height="24" />
            </a>
            <div className={`tablet-menu ${isMenuOpen ? 'close' : ''}`}>
              <Link to="/home" onClick={closeMenu}>HOME</Link>
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
                <Link to="/home" className="nav-link active" aria-current="page" href="/">
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
            <a className="cart-logo" onClick={toggleCart}>
              <img src="/assets/shared/desktop/icon-cart.svg" alt="cart"/>
            </a>
          </div>
        </div>
      </nav>
      
      {isCartOpen && (
        <div className='cart'>
              <h6 className='cart-h6'>CART (3)</h6>
              <button className='button-back cart-remove'>Remove all</button>

              <div className='cart-product1'>
                  <img className='cart-img' src='/assets/cart/image-xx99-mark-two-headphones.jpg' alt='product'/>
                  <div>
                      <div className='cart-h7'>XX99 MK II</div>
                      <p className='cart-price cart-p'>$ 2,999</p>
                  </div>
              </div>
              <form className='cart-form1 product-form'>
                  <div className="cart-quantity product-quantity">
                      <button className='cart-button1 product-button product-button-1' type="button">-</button>
                      <input className='cart-button1 product-button product-input' type="number" id="quantity" name="quantity" min="1"  />
                      <button className='cart-button1 product-button product-button-1' type="button" >+</button>
                  </div>
              </form>


              <div className='cart-h7-total'>TOTAL<span className='cart-total-price cart-h7'>$ 5,396</span></div>
              <button className='cart-button2 button-1'>CHECKOUT</button>
        </div>
      )}
    </>
  );
}

export default Navbar;
