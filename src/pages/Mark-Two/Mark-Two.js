import React from 'react'
import Products from '../../components/Products/Products';
import PreviewSmall from '../../components/PreviewSmall/PreviewSmall';
import Bringing from '../../components/Bringing/Bringing';

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

            <PreviewSmall />
            <Bringing />
        </div>
     );
}

export default MarkTwo;