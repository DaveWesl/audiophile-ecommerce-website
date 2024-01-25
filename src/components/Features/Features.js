import React from 'react'
import './Features.css'


function Features(props) {
    const { featuresText1, featuresText2, featuresQuantity1, featuresQuantity2, featuresQuantity3, featuresQuantity4, featuresQuantity5, feature1, feature2, feature3, feature4, feature5 } = props;

    return ( 
        <div className='features'>
            <div className='features-text'>
                <h5 className='features-h5'>FEATURES</h5>
                <p className='features-p'>{featuresText1}<br></br><br></br>{featuresText2}</p>
            </div>
            <div className='features-box'>
                <h5 className='features-h5'>IN THE BOX</h5>
                <ul className='features-list'>
                    <div className='features-li'><li className='features-list-1'>{featuresQuantity1}</li><li className='features-list-2'>{feature1}</li></div>
                    <div className='features-li'><li className='features-list-1'>{featuresQuantity2}</li><li className='features-list-2'>{feature2}</li></div>
                    <div className='features-li'><li className='features-list-1'>{featuresQuantity3}</li><li className='features-list-2'>{feature3}</li></div>
                    <div className='features-li'><li className='features-list-1'>{featuresQuantity4}</li><li className='features-list-2'>{feature4}</li></div>
                    <div className='features-li'><li className='features-list-1'>{featuresQuantity5}</li><li className='features-list-2'>{feature5}</li></div>
                </ul>
            </div>

        </div>
     );
}

export default Features;