import React from 'react'
import './PreviewSmall.css'

function PreviewSmall() {
    return ( 
        <div className='preview-small'>
            <div className='preview-products'>
                <img className='preview-img' src='/assets/shared/desktop/image-category-thumbnail-headphones.png' alt='headphones'/>
                <h6 className='preview-h3'>HEADPHONES</h6>
                <a href='/' className='preview-a'>SHOP <span>&gt;</span></a>
            </div>

            <div className='preview-products'>
                <img className='preview-img' src='/assets/shared/desktop/image-category-thumbnail-speakers.png' alt='speakers'/>
                <h6 className='preview-h3'>SPEAKERS</h6>
                <a href='/' className='preview-a'>SHOP <span>&gt;</span></a>
            </div>

            <div className='preview-products'>
                <img className='preview-img' src='/assets/shared/desktop/image-category-thumbnail-earphones.png' alt='earphones'/>
                <h6 className='preview-h3'>EARPHONES</h6>
                <a href='/' className='preview-a'>SHOP <span>&gt;</span></a>
            </div>            
        </div>
     );
}

export default PreviewSmall;