import React from 'react';
import './Products.css';

function Products(props) {
  const { imgSrc, overline, heading, description, displayImageFirst } = props;

  return ( 
    <div className='product'>
      {displayImageFirst ? (
        <>
          <img className='product-img' src={imgSrc} alt='product'/>
          <div className='product-text'>
            <div className="product-overline">{overline}</div>
            <h3 className='product-h3'>{heading}</h3>
            <p className='product-p'>{description}</p>
            <button className='button-1'>SEE PRODUCT</button>
            <div className='product-cart'>
                <input></input>
                <button className='button-1'>ADD TO CART</button>
            </div>
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
