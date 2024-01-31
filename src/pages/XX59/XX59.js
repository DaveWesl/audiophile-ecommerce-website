import React from 'react'
import Products from '../../components/Products/Products';
import PreviewSmall from '../../components/PreviewSmall/PreviewSmall';
import Bringing from '../../components/Bringing/Bringing';
import Features from '../../components/Features/Features';
import Images from '../../components/Images/Images';
import Youmayalso from '../../components/Youmayalso/Youmayalso';
import { Link } from 'react-router-dom'

function XX59() {
    return ( 
        <div className="xx59">
            <Link to='/headphones' className='button-back'>Go Back</Link>
            
            <Products
              imgSrc='/assets/shared/desktop/image-xx59-headphones.jpg'
              heading='XX59 Headphones'
              description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
              price='$ 899'
              displayImageFirst={true}
            />

            <Features 
                featuresText1='These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.'
                featuresText2='More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
                featuresQuantity1='1x' 
                featuresQuantity2='2x'
                featuresQuantity3='1x' 
                featuresQuantity4='1x'
                feature1='Headphone Unit'
                feature2='Replacement Earcups'
                feature3='User Manual'
                feature4='3.5mm 5m Audio Cable'

            />

            <Images 
                imagesImg1='/assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
                imagesImg2='/assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
                imagesImg3='/assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
                imagesImgAlt1='women laughing with headphones'
                imagesImgAlt2='Headphones over some books'
                imagesImgAlt3='Headphones XX59'
            />

            <Youmayalso 
                YoumayalsoImg1='/assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
                YoumayalsoImg2='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
                YoumayalsoImg3='/assets/shared/desktop/image-zx9-speaker.jpg' 
                YoumayalsoImgAlt1='mark two headphones'
                YoumayalsoImgAlt2='mark one headphones'
                YoumayalsoImgAlt3='zx9 speaker'   
                YoumayalsoProduct1='XX99 MARK II'
                YoumayalsoProduct2='XX99 MARK I'
                YoumayalsoProduct3='ZX9 SPEAKER'    
                YoumayalsoUrl1='/marktwo'
                YoumayalsoUrl2='/markone'
                YoumayalsoUrl3='/zx9'     
            />

            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default XX59;