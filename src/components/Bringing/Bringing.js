import React, { useEffect, useState } from 'react';
import "./Bringing.css";

function Bringing() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
      <div className="last-section">
        <div className="text">
          <h2 className="bringing-you-the-bes">
            <span className="span">Bringing you the </span>
            <span className="text-wrapper-12">best </span>
            <span className="span">audio gear</span>
          </h2>
          <p className="located-at-the-heart">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="img-container">
            <img className="img-guy" 
            src={
                windowWidth < 591
                  ? '/assets/shared/mobile/image-best-gear.jpg'
                  : windowWidth <= 1100
                  ? '/assets/shared/tablet/image-best-gear.jpg'
                  : '/assets/shared/desktop/image-best-gear.jpg'
              } 
            alt="guy hearing music"/>
        </div>
      </div>
    
  );
}

export default Bringing;
