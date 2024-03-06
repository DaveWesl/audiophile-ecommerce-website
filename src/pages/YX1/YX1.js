import React from 'react'
import Products from '../../components/Products/Products';
import PreviewSmall from '../../components/PreviewSmall/PreviewSmall';
import Bringing from '../../components/Bringing/Bringing';
import Features from '../../components/Features/Features';
import Images from '../../components/Images/Images';
import Youmayalso from '../../components/Youmayalso/Youmayalso';
import { Link } from 'react-router-dom'

function YX1({ onAddToCart }) {
    return ( 
        <div className="yx1">
            <Link to='/earphones' className='button-back'>Go Back</Link>
            
            <Products
                id='yx1'
                imgSrc='/assets/product-yx1-earphones/desktop/image-product.jpg'
                overline='NEW PRODUCT'
                heading='YX1 WIRELESS EARPHONES'
                description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
                price='$ 599'
                displayImageFirst={true}
                onAddToCart={onAddToCart}
            />

            <Features 
                featuresText1='Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.'
                featuresText2='The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'
                featuresQuantity1='2x' 
                featuresQuantity2='6x'
                featuresQuantity3='1x' 
                featuresQuantity4='1x'
                featuresQuantity5='1x'
                feature1='Earphone Unit'
                feature2='Multi-size Earplugs'
                feature3='User Manual'
                feature4='USB-C Charging Cable'
                feature5='Travel Pouch'
            />

            <Images 
                imagesImg1='/assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
                imagesImg2='/assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
                imagesImg3='/assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
                imagesImgAlt1='2 earphones on a black background'
                imagesImgAlt2='2 earphones with there case'
                imagesImgAlt3='2 earphones inside there case'
            />

            <Youmayalso 
                YoumayalsoImg1='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
                YoumayalsoImg2='/assets/shared/desktop/image-xx59-headphones.jpg' 
                YoumayalsoImg3='/assets/shared/desktop/image-zx9-speaker.jpg'
                YoumayalsoImgAlt1='XX99 Mark I'
                YoumayalsoImgAlt2='XX59'
                YoumayalsoImgAlt3='ZX9 Speaker'   
                YoumayalsoProduct1='XX99 Mark I'
                YoumayalsoProduct2='XX59'
                YoumayalsoProduct3='ZX9 Speaker' 
                YoumayalsoUrl1='/markone'
                YoumayalsoUrl2='/xx59'
                YoumayalsoUrl3='/zx9'        
            />

            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default YX1;