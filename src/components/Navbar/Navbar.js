import React, { useState } from "react";
import "./Navbar.css";
import "./Cart.css";
import { Link } from "react-router-dom";

function Navbar({ onPageChange, cartItems, setCartItems }) {
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

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity >= 0) {
      // Wenn die neue Quantity größer oder gleich 0 ist, aktualisiere den Warenkorb
      setCartItems((prevCartItems) => {
        // Filtere das Element mit Quantity 0 heraus
        const updatedCartItems = prevCartItems.filter(
          (item) => !(item.id === productId && newQuantity === 0)
        );

        // Aktualisiere die Quantity des entsprechenden Elements oder füge es hinzu
        const updatedItems = updatedCartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        );

        return updatedItems;
      });
    }
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        return (
          total +
          item.quantity *
            parseFloat(item.price.replace("$", "").replace(",", ""))
        );
      }, 0)
      .toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  const isCartNotEmpty = cartItems.length > 0;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-tablet">
            <a
              className="menu-tablet"
              href="/"
              onClick={toggleMenu} /* eslint-disable jsx-a11y/anchor-is-valid */
            >
              <img
                src="/assets/shared/tablet/icon-hamburger.svg"
                alt="audiophile"
                width="30"
                height="24"
              />
            </a>
            <div className={`tablet-menu ${isMenuOpen ? "close" : ""}`}>
              <Link to="/" onClick={closeMenu}>
                HOME
              </Link>
              <Link to="/headphones" onClick={closeMenu}>
                HEADPHONES
              </Link>
              <Link to="/speakers" onClick={closeMenu}>
                SPEAKERS
              </Link>
              <Link to="/earphones" onClick={closeMenu}>
                EARPHONES
              </Link>
            </div>
          </div>
          <div className="container-logo">
            <Link to="/" className="navbar-brand">
              <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/headphones" className="nav-link">
                  HEADPHONES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/speakers" className="nav-link">
                  SPEAKERS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/earphones" className="nav-link">
                  EARPHONES
                </Link>
              </li>
            </ul>
          </div>
          <div className="container-cart">
            <a
              className={`cart-logo ${isCartNotEmpty ? "white-cart-logo" : ""}`}
              onClick={toggleCart}
            >
              <svg
                width="23"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-cart"
              >
                <path
                  d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                  fill={isCartNotEmpty ? "rgba(216, 125, 74, 1)" : "#FFF"}
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {isCartOpen && (
        <div className="cart">
          <div className="cart-container-buttons">
            <button className="cart-close" onClick={closeCart}>
              X
            </button>

            <h6 className="cart-h6">CART ({calculateTotalQuantity()})</h6>
            <button
              className="button-back cart-remove"
              onClick={removeAllFromCart}
            >
              Remove all
            </button>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-product1">
              <div className="test10">
                <img className="cart-img" src={item.imgSrc} alt="product" />
                <div className="cart-description">
                  <div className="cart-h7">{item.heading}</div>
                  <p className="cart-price cart-p">{item.price}</p>
                </div>
                <form className="cart-form1 product-form">
                  <div className="cart-quantity product-quantity">
                    <button
                      className="cart-button1"
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      className="cart-input"
                      type="number"
                      id={`quantity-${item.id}`}
                      name={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      readOnly
                    />
                    <button
                      className="cart-button1"
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ))}

          <div className="cart-h7-total">
            TOTAL
            <span className="cart-total-price cart-h7">
              $ {calculateTotalPrice()}
            </span>
          </div>
          <Link
            to="/checkout"
            onClick={closeCart}
            className="cart-button2 button-1"
          >
            CHECKOUT
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
