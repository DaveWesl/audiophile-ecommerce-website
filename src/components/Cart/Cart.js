import React from 'react'
import './Cart.css'

function Cart() {
    return ( 
        <div className='cart'>
            <h6 className='cart-h6'>CART (3)</h6>
            <p className='cart-p cart-remove'>Remove all</p>

            <div className='cart-product1'>
                <div>
                    <h7 className='cart-h7'>XX99 MK II</h7>
                    <p className='cart-p'>$ 2,999</p>
                </div>
                <form className='cart-form product-form'>
                    <div className="cart-quantity product-quantity">
                        <button className='product-button product-button-1' type="button">-</button>
                        <input className='product-button product-input' type="number" id="quantity" name="quantity" min="1"  />
                        <button className='product-button product-button-1' type="button" >+</button>
                    </div>
                </form>
            </div>

            <h7 className='cart-h7-total'>TOTAL<span className='cart-price cart-h7'>$ 5,396</span></h7>
            <button className='cart-button button-1'>CHECKOUT</button>
        </div>
     );
}

export default Cart;