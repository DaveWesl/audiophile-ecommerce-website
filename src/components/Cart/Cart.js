import React from 'react'
import './Cart.css'

function Cart() {
    return ( 
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
     );
}

export default Cart;