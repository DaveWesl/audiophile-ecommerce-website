import React, { useEffect, useState } from "react";
import "./Speakers.css";
import PreviewSmall from "../../components/PreviewSmall/PreviewSmall";
import Bringing from '../../components/Bringing/Bringing';
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

function Speakers() {
  const [displayImageFirst, setDisplayImageFirst] = useState(true);

  useEffect(() => {
    const updateDisplayImageFirst = () => {
      const screenWidth = window.innerWidth;
      setDisplayImageFirst(screenWidth < 800);
    };

    updateDisplayImageFirst();
    window.addEventListener('resize', updateDisplayImageFirst);

    return () => {
      window.removeEventListener('resize', updateDisplayImageFirst);
    };
  }, []);

  return (
    <div className="Headphones">
      <Header pageHeader="Speakers" />

      <Products
        imgSrc='/assets/shared/desktop/image-zx9-speaker.jpg'
        overline='NEW PRODUCT'
        heading='ZX9 SPEAKER'
        description='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
        displayImageFirst={true}
      />

      <Products
        imgSrc='/assets/shared/desktop/image-zx7-speaker.jpg'
        heading='ZX7 SPEAKER'
        description='Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
        displayImageFirst={displayImageFirst}
      />

      <PreviewSmall />
      <Bringing />
    </div>
  );
}

export default Speakers;
