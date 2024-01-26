import React from 'react'
import './Youmayalso.css'

function Youmayalso(props) {
    const {
        YoumayalsoImg1,
        YoumayalsoImg2,
        YoumayalsoImg3, 
        YoumayalsoImgAlt1,
        YoumayalsoImgAlt2,
        YoumayalsoImgAlt3,
        YoumayalsoProduct1,
        YoumayalsoProduct2,
        YoumayalsoProduct3
        } = props;
    
    return ( 
        <div className='youmayalso'>
            <h4 className='youmayalso-h4'>YOU MAY ALSO LIKE</h4>
            <div className='youmayalso-images'>
                <div className='youmayalso-product'>
                    <img className='youmayalso-image' src={YoumayalsoImg1} alt={YoumayalsoImgAlt1}/>
                    <h5 className='youmayalso-h5'>{YoumayalsoProduct1}</h5>
                    <button className='button-1'>SEE PRODUCT</button>
                </div>
                <div className='youmayalso-product'>
                    <img className='youmayalso-image' src={YoumayalsoImg2} alt={YoumayalsoImgAlt2}/>
                    <h5 className='youmayalso-h5'>{YoumayalsoProduct2}</h5>
                    <button className='button-1'>SEE PRODUCT</button>
                </div>
                <div className='youmayalso-product'>
                    <img className='youmayalso-image' src={YoumayalsoImg3} alt={YoumayalsoImgAlt3}/>
                    <h5 className='youmayalso-h5'>{YoumayalsoProduct3}</h5>
                    <button className='button-1'>SEE PRODUCT</button>
                </div>
            </div>
        </div>
     );
}

export default Youmayalso;