import React from 'react'
import './PreviewSmall.css'
import { Link } from 'react-router-dom'

function PreviewSmall() {
    return ( 
        <div className='preview-small'>
            <div className='preview-products'>
                <img className='preview-img' src={process.env.PUBLIC_URL + '/assets/shared/desktop/image-category-thumbnail-headphones.png'} alt='headphones'/>
                <h6 className='preview-h3'>HEADPHONES</h6>
                <Link to='/headphones' className='preview-a'>SHOP <span>&gt;</span></Link>
            </div>

            <div className='preview-products'>
                <img className='preview-img' src={process.env.PUBLIC_URL + '/assets/shared/desktop/image-category-thumbnail-speakers.png'} alt='speakers'/>
                <h6 className='preview-h3'>SPEAKERS</h6>
                <Link to='/speakers' className='preview-a'>SHOP <span>&gt;</span></Link>
            </div>

            <div className='preview-products'>
                <img className='preview-img' src={process.env.PUBLIC_URL + '/assets/shared/desktop/image-category-thumbnail-earphones.png'} alt='earphones'/>
                <h6 className='preview-h3'>EARPHONES</h6>
                <Link to='/earphones' className='preview-a'>SHOP <span>&gt;</span></Link>
            </div>            
        </div>
     );
}

export default PreviewSmall;