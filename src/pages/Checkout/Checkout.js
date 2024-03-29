import "./Checkout.css";
import "./Confirmation.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Checkout({ cartItems, setCartItems }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [validEmail, setValidEmail] = useState(true);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);

  const [isEMoneyActive, setEMoneyActive] = useState(false);
  const [isCashOnDeliveryActive, setCashOnDeliveryActive] = useState(false);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const calculateTotalPrice = () => {
    const cartTotal = cartItems.reduce((total, item) => {
      return (
        total +
        item.quantity * parseFloat(item.price.replace("$", "").replace(",", ""))
      );
    }, 0);

    const shippingCost = 50;
    const vatRate = 0.19; // 19% Mehrwertsteuersatz

    const vatCost = cartTotal * vatRate;
    const total = cartTotal;
    const grandTotal = cartTotal + shippingCost;

    return { total, vatCost, grandTotal };
  };

  const { total, vatCost, grandTotal } = calculateTotalPrice();

  const handleContinueAndPay = () => {
    if (cartItems.length > 0) {
      setShowConfirmation(true);
    } else {
      alert("You don't have a product in the cart.");
    }
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setValidEmail(isValidEmail);
  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumberValue = event.target.value;
    setPhoneNumber(phoneNumberValue);
    setValidPhoneNumber(/^\+?[0-9 \-()]{8,}$/.test(phoneNumberValue));
  };

  const handleEMoneyButtonClick = () => {
    setEMoneyActive(true);
    setCashOnDeliveryActive(false);
  };

  const handleCashOnDeliveryButtonClick = () => {
    setEMoneyActive(false);
    setCashOnDeliveryActive(true);
  };

  const handleBackToHome = () => {
    setCartItems([]);
  };

  return (
    <div className="checkout confirmation-parent">
      <div className="checkout-all">
        <Link to="/" className="button-back checkout-back">
          Go Back
        </Link>
        <div className="checkout-container-summary">
          <div className="checkout-container">
            <div className="checkout-form">
              <h3 className="checkout-h3">CHECKOUT</h3>

              <h6 className="checkout-h6">BILLING DETAILS</h6>
              <div className="checkout-label-container">
                <label className="checkout-label" htmlFor="billing-name">
                  Name
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="billing-name"
                  name="billing-name"
                  placeholder="Alex Honold"
                />
              </div>
              <div className="checkout-label-container">
                <div className="checkout-label-test">
                  <label className="checkout-label" htmlFor="billing-email">
                    Email Address
                  </label>
                  {!validEmail && (
                    <p className="label-test-wrong">Wrong format</p>
                  )}
                </div>
                <input
                  className="checkout-input"
                  type="email"
                  id="billing-email"
                  name="billing-email"
                  placeholder="alex@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  style={{
                    borderColor: validEmail ? "" : "rgba(205, 44, 44, 1)",
                  }}
                />
              </div>
              <div className="checkout-label-container">
                <div className="checkout-label-test">
                  <label className="checkout-label" htmlFor="billing-phone">
                    Phone Number
                  </label>
                  {!validPhoneNumber && (
                    <p className="label-test-wrong">Wrong format</p>
                  )}
                </div>
                <input
                  className="checkout-input"
                  type="text"
                  id="billing-phone"
                  name="billing-phone"
                  placeholder="+1 (202) 555-0136"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  style={{
                    borderColor: validPhoneNumber ? "" : "rgba(205, 44, 44, 1)",
                  }}
                />
              </div>

              <h6 className="checkout-h6">SHIPPING INFO</h6>
              <div className="checkout-label-container">
                <label className="checkout-label" htmlFor="shipping-address">
                  Address
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="shipping-address"
                  name="shipping-address"
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <div className="checkout-label-container">
                <label className="checkout-label" htmlFor="shipping-zip">
                  ZIP Code
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="shipping-zip"
                  name="shipping-zip"
                  placeholder="10001"
                />
              </div>
              <div className="checkout-label-container">
                <label className="checkout-label" htmlFor="billing-city">
                  City
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="billing-city"
                  name="billing-city"
                  placeholder="New York"
                />
              </div>
              <div className="checkout-label-container">
                <label className="checkout-label" htmlFor="billing-country">
                  Country
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="billing-country"
                  name="billing-country"
                  placeholder="United States"
                />
              </div>

              <h6 className="checkout-h6">Payment Details</h6>
              <p className="checkout-payment-p">Payment Method</p>
              <button
                className={`checkout-button-text checkout-button-text1 ${
                  isEMoneyActive ? "active" : ""
                }`}
                onClick={handleEMoneyButtonClick}
              >
                <div
                  className={`checkout-button-circle checkout-button-circle1 ${
                    isEMoneyActive ? "active" : ""
                  }`}
                >
                  {isEMoneyActive && (
                    <div className="checkout-button-circle-inner"></div>
                  )}
                </div>
                e-Money
              </button>

              <button
                className={`checkout-button-text checkout-button-text2 ${
                  isCashOnDeliveryActive ? "active" : ""
                }`}
                onClick={handleCashOnDeliveryButtonClick}
              >
                <div
                  className={`checkout-button-circle checkout-button-circle2 ${
                    isCashOnDeliveryActive ? "active" : ""
                  }`}
                >
                  {isCashOnDeliveryActive && (
                    <div className="checkout-button-circle-inner"></div>
                  )}
                </div>
                Cash on Delivery
              </button>

              {isEMoneyActive && (
                <>
                  <div className="checkout-label-container">
                    <label
                      className="checkout-label"
                      htmlFor="payment-e-number"
                    >
                      e-Money Number
                    </label>
                    <input
                      className="checkout-input"
                      type="text"
                      id="payment-e-number"
                      name="payment-e-number"
                      placeholder="238521993"
                    />
                  </div>
                  <div className="checkout-label-container">
                    <label className="checkout-label" htmlFor="payment-e-pin">
                      e-Money PIN
                    </label>
                    <input
                      className="checkout-input"
                      type="text"
                      id="payment-e-pin"
                      name="payment-e-pin"
                      placeholder="6891"
                    />
                  </div>
                </>
              )}

              {isCashOnDeliveryActive && (
                <div className="checkout-options">
                  <svg
                    className="checkout-payment-logo"
                    width="48"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                      fill="#D87D4A"
                    />
                  </svg>
                  <p className="checkout-options-p">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="summary">
            <h6 className="summary-h6">SUMMARY</h6>

            {cartItems.map((item) => (
              <div key={item.id} className="summary-product1">
                <img className="summary-img" src={item.imgSrc} alt="product" />
                <div>
                  <div className="summary-h7">{item.heading}</div>
                  <p className="summary-price summary-p">{item.price}</p>
                </div>
                <p className="summary-p summary-quantity">x {item.quantity}</p>
              </div>
            ))}

            <div className="summary-total">
              <div className="summary-h7-total">
                TOTAL
                <span className="summary-total-price summary-h7-span">
                  $ {total.toFixed(2)}
                </span>
              </div>
              <div className="summary-h7-total">
                SHIPPING
                <span className="summary-shipping-price summary-h7-span">
                  $ 50
                </span>
              </div>
              <div className="summary-h7-total">
                VAT (INCLUDED)
                <span className="summary-vat-price summary-h7-span">
                  $ {vatCost.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="summary-h7-total">
              GRAND TOTAL
              <span className="summary-grandtotal-price summary-h7-span">
                $ {grandTotal.toFixed(2)}
              </span>
            </div>
            <button
              className="summary-button2 button-1"
              onClick={handleContinueAndPay}
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation">
          <div className="confirmation-container">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  stroke-width="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>
            <h3 className="confirmation-h3 checkout-h3">
              THANK YOU FOR YOUR ORDER
            </h3>
            <p className="confirmation-p">
              You will receive an email confirmation shortly.
            </p>
            <div className="confirmation-container-total">
              <h5 className="confirmation-h5">GRAND TOTAL</h5>
              <h5 className="confirmation-h5 confirmation-total">$ {grandTotal.toFixed(2)}</h5>
            </div>
            <Link to="/" className="summary-button2 button-1" onClick={handleBackToHome}>
              BACK TO HOME
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
