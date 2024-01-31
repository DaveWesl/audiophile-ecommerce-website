import React from 'react'
import Products from '../../components/Products/Products';
import PreviewSmall from '../../components/PreviewSmall/PreviewSmall';
import Bringing from '../../components/Bringing/Bringing';
import Features from '../../components/Features/Features';
import Images from '../../components/Images/Images';
import Youmayalso from '../../components/Youmayalso/Youmayalso';
import { Link } from 'react-router-dom'

function ZX9() {
    return ( 
        <div className="zx9">
            <Link to='/speakers' className='button-back'>Go Back</Link>
            
            <Products
              imgSrc='/assets/shared/desktop/image-zx9-speaker.jpg'
              overline='NEW PRODUCT'
              heading='ZX9 SPEAKER'
              description='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
              price='$ 4,500'
              displayImageFirst={true}
            />

            <Features 
                featuresText1='Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).'
                featuresText2='Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'
                featuresQuantity1='2x' 
                featuresQuantity2='2x'
                featuresQuantity3='1x' 
                featuresQuantity4='1x'
                featuresQuantity5='1x'
                feature1='Speaker Unit'
                feature2='Speaker Cloth Panel'
                feature3='User Manual'
                feature4='3.5mm 10m Audio Cable'
                feature5='10m Optical Cable'
            />

            <Images 
                imagesImg1='/assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
                imagesImg2='/assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
                imagesImg3='/assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
                imagesImgAlt1='speaker'
                imagesImgAlt2='speaker in use in a home'
                imagesImgAlt3='2 Speakers ZX9'
            />

            <Youmayalso 
                YoumayalsoImg1='/assets/shared/desktop/image-zx7-speaker.jpg'
                YoumayalsoImg2='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
                YoumayalsoImg3='/assets/shared/desktop/image-xx59-headphones.jpg' 
                YoumayalsoImgAlt1='ZX7 Speaker'
                YoumayalsoImgAlt2='XX99 Mark One headphones'
                YoumayalsoImgAlt3='XX59 headphones'   
                YoumayalsoProduct1='ZX7 Speaker'
                YoumayalsoProduct2='XX99 Mark I'
                YoumayalsoProduct3='XX59'    
                YoumayalsoUrl1='/zx7'
                YoumayalsoUrl2='/markone'
                YoumayalsoUrl3='/xx59'     
            />

            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default ZX9;