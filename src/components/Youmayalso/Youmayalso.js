import React from 'react'
import './Youmayalso.css'
import { Link } from 'react-router-dom'

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
        YoumayalsoProduct3,
        YoumayalsoUrl1,
        YoumayalsoUrl2,
        YoumayalsoUrl3
        } = props;
    
    return ( 
        <div className='youmayalso'>
            <h4 className='youmayalso-h4'>YOU MAY ALSO LIKE</h4>
            <div className='youmayalso-images'>
                <div className='youmayalso-product'>
                    <img className='youmayalso-image' src={YoumayalsoImg1} alt={YoumayalsoImgAlt1}/>
                    <h6 className='youmayalso-h6'>{YoumayalsoProduct1}</h6>
                    <Link to={YoumayalsoUrl1} className='button-1'>SEE PRODUCT</Link>
                </div>
                <div className='youmayalso-product'>
                    <img className='youmayalso-image' src={YoumayalsoImg2} alt={YoumayalsoImgAlt2}/>
                    <h6 className='youmayalso-h6'>{YoumayalsoProduct2}</h6>
                    <Link to={YoumayalsoUrl2} className='button-1'>SEE PRODUCT</Link>
                </div>
                <div className='youmayalso-product'>
                    <img className='youmayalso-image' src={YoumayalsoImg3} alt={YoumayalsoImgAlt3}/>
                    <h6 className='youmayalso-h6'>{YoumayalsoProduct3}</h6>
                    <Link to={YoumayalsoUrl3} className='button-1'>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
     );
}

export default Youmayalso;