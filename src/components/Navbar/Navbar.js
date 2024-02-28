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

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return ( 
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-tablet">
            <a className="menu-tablet" href='/' onClick={toggleMenu} /* eslint-disable jsx-a11y/anchor-is-valid */>
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
                <Link to="/" className="nav-link active" aria-current="page" >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/headphones" className="nav-link" >
                  HEADPHONES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/speakers" className="nav-link">
                  SPEAKERS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/earphones" className="nav-link" >
                  EARPHONES
                </Link>
              </li>
            </ul>
          </div>
          <div className="container-cart">
            <a className="cart-logo" onClick={toggleCart}>
              <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg" className='svg-cart'>
                  <path
                      d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                      fill="#FFF" fillRule="nonzero" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      
      {isCartOpen && (
        <div className='cart'>
              <button className='cart-close' onClick={closeCart} >X</button>

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
              <Link to="/checkout" onClick={closeCart} className='cart-button2 button-1'>CHECKOUT</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
