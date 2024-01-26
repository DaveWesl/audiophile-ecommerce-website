import React from 'react'
import './Images.css'

function Images(props) {
    const {
        imagesImg1,
        imagesImg2,
        imagesImg3,
        imagesImgAlt1,
        imagesImgAlt2,
        imagesImgAlt3 
    } = props;

    return ( 
        <div className='images'>
            <img className='images-img1' src={imagesImg1} alt={imagesImgAlt1}/>
            <img className='images-img2' src={imagesImg2} alt={imagesImgAlt2}/>
            <img className='images-img3' src={imagesImg3} alt={imagesImgAlt3}/>
        </div>
     );
}

export default Images;