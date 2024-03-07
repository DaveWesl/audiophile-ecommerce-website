import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Products.css';

function Products(props) {
  const { imgSrc, overline, heading, description, displayImageFirst, buttonSeeProduct, price, productUrl, id } = props;
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const productInfo = {
      imgSrc,
      heading,
      price,
      quantity,
      id,
    };
    props.onAddToCart(productInfo);
  }

  return ( 
    <div className='product'>
      {displayImageFirst ? (
        <>
          <img className='product-img' src={imgSrc} alt='product'/>
          <div className='product-text'>
            <div className="product-overline">{overline}</div>
            <h3 className='product-h3'>{heading}</h3>
            <p className='product-p'>{description}</p>
            {buttonSeeProduct ? (
            <Link to={productUrl} className='button-1'>SEE PRODUCT</Link>
            ) : ( 
            <div className='product-cart'>
              <h6 className='product-h4'>{price}</h6>
              <form className='product-form' onSubmit={handleSubmit}>
                <div className="product-quantity">
                    <button className='product-button product-button-1' type="button" onClick={decreaseQuantity}>-</button>
                    <input className='product-button product-input' type="number" id="quantity" name="quantity" value={quantity} min="1" onChange={(e) => setQuantity(parseInt(e.target.value))} />
                    <button className='product-button product-button-1' type="button" onClick={increaseQuantity}>+</button>
                </div>
                <button className='button-1' onClick={handleSubmit}>Add to Cart</button>
              </form>
            </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className='product-text'>
            <div className="product-overline">{overline}</div>
            <h3 className='product-h3'>{heading}</h3>
            <p className='product-p'>{description}</p>
            <button className='button-1'>SEE PRODUCT</button>
          </div>
          <img className='product-img' src={imgSrc} alt='product'/>
        </>
      )}
    </div>
  );
}

export default Products;
