import React from 'react'
import Products from '../../components/Products/Products';
import PreviewSmall from '../../components/PreviewSmall/PreviewSmall';
import Bringing from '../../components/Bringing/Bringing';
import Features from '../../components/Features/Features';
import Images from '../../components/Images/Images';
import Youmayalso from '../../components/Youmayalso/Youmayalso';
import { Link } from 'react-router-dom'

function MarkOne() {
    return ( 
        <div className="markone">
            <Link to='/headphones' className='button-back'>Go Back</Link>
            
            <Products
              imgSrc='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
              heading='XX99 Mark I Headphones'
              description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
              price='$ 1,750'
              displayImageFirst={true}
            />

            <Features 
                featuresText1='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.'
                featuresText2='From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'
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
                imagesImg1='/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
                imagesImg2='/assets/product-xx99-mark-one-headphones\desktop/image-gallery-2.jpg'
                imagesImg3='/assets/product-xx99-mark-one-headphones\desktop/image-gallery-3.jpg'
                imagesImgAlt1='microfone with headphones'
                imagesImgAlt2='Headphones on table'
                imagesImgAlt3='Headphones Mark 1'
            />

            <Youmayalso 
                YoumayalsoImg1='/assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
                YoumayalsoImg2='/assets/shared/desktop/image-xx59-headphones.jpg'
                YoumayalsoImg3='/assets/shared/desktop/image-zx9-speaker.jpg' 
                YoumayalsoImgAlt1='mark two headphones'
                YoumayalsoImgAlt2='xx59 headphones'
                YoumayalsoImgAlt3='zx9 speaker'   
                YoumayalsoProduct1='XX99 MARK II'
                YoumayalsoProduct2='XX59'
                YoumayalsoProduct3='ZX9 SPEAKER'   
                YoumayalsoUrl1='/marktwo'
                YoumayalsoUrl2='/xx59'
                YoumayalsoUrl3='/zx9'      
            />

            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default MarkOne;