import React from 'react'
import Products from '../../components/Products/Products';
import PreviewSmall from '../../components/PreviewSmall/PreviewSmall';
import Bringing from '../../components/Bringing/Bringing';
import Features from '../../components/Features/Features';
import Images from '../../components/Images/Images';
import Youmayalso from '../../components/Youmayalso/Youmayalso';

function ZX7() {
    return ( 
        <div className="Headphones">
            <button className='button-back'>Go Back</button>
            
            <Products
              imgSrc='/assets/shared/desktop/image-zx7-speaker.jpg'
              heading='ZX7 SPEAKER'
              description='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
              price='$ 3,500'
              displayImageFirst={true}
            />

            <Features 
                featuresText1='Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.'
                featuresText2='The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.'
                featuresQuantity1='2x' 
                featuresQuantity2='2x'
                featuresQuantity3='1x' 
                featuresQuantity4='1x'
                featuresQuantity5='1x'
                feature1='Speaker Unit'
                feature2='Speaker Cloth Panel'
                feature3='User Manual'
                feature4='3.5mm 7.5m Audio Cable'
                feature5='7.5m Optical Cable'
            />

            <Images 
                imagesImg1='/assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
                imagesImg2='/assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
                imagesImg3='/assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
                imagesImgAlt1='speaker'
                imagesImgAlt2='a man in his soundroom with some speakers'
                imagesImgAlt3='a Speakers ZX7 on a table'
            />

            <Youmayalso 
                YoumayalsoImg1='/assets/shared/desktop/image-zx9-speaker.jpg'
                YoumayalsoImg2='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
                YoumayalsoImg3='/assets/shared/desktop/image-xx59-headphones.jpg' 
                YoumayalsoImgAlt1='ZX9 Speaker'
                YoumayalsoImgAlt2='XX99 Mark One headphones'
                YoumayalsoImgAlt3='XX59 headphones'   
                YoumayalsoProduct1='ZX9 Speaker'
                YoumayalsoProduct2='XX99 Mark I'
                YoumayalsoProduct3='XX59'         
            />

            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default ZX7;