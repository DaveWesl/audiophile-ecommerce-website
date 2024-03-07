import React, { useEffect, useState } from "react";
import "./Headphones.css";
import PreviewSmall from "../../components/PreviewSmall/PreviewSmall";
import Bringing from '../../components/Bringing/Bringing';
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

function Headphones() {
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
      <Header pageHeader="Headphones" />

      <Products
        imgSrc={process.env.PUBLIC_URL + '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg'}
        overline='NEW PRODUCT'
        heading='XX99 Mark II Headphones'
        description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
        displayImageFirst={true}
        buttonSeeProduct={true}
        productUrl='/marktwo'
      />

      <Products
        imgSrc= {process.env.PUBLIC_URL + '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'}
        heading='XX99 Mark I Headphones'
        description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
        displayImageFirst={displayImageFirst}
        buttonSeeProduct={true}
        productUrl='/markone'
      />

      <Products
        imgSrc={process.env.PUBLIC_URL + '/assets/shared/desktop/image-xx59-headphones.jpg'}
        heading='XX59 Headphones'
        description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
        displayImageFirst={true}
        buttonSeeProduct={true}
        productUrl='/xx59'
      />

      <PreviewSmall />
      <Bringing />
    </div>
  );
}

export default Headphones;
