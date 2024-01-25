import React from 'react'
import Products from '../../components/Products/Products';
import PreviewSmall from '../../components/PreviewSmall/PreviewSmall';
import Bringing from '../../components/Bringing/Bringing';
import Features from '../../components/Features/Features';

function MarkTwo() {
    return ( 
        <div className="Headphones">
            <button className='button-back'>Go Back</button>
            
            <Products
              imgSrc='/assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
              overline='NEW PRODUCT'
              heading='XX99 Mark II Headphones'
              description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
              displayImageFirst={true}
            />

            <Features 
                featuresText1='Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.'
                featuresText2='The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.'
                featuresQuantity1='1x' 
                featuresQuantity2='2x'
                featuresQuantity3='1x' 
                featuresQuantity4='1x'
                featuresQuantity5='1x'
                feature1='Headphone Unit'
                feature2='Replacement Earcups'
                feature3='User Manual'
                feature4='3.5mm 5m Audio Cable'
                feature5='Travel Bag'
            />

            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default MarkTwo;