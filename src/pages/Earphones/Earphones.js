import React from "react";
import "./Earphones.css";
import PreviewSmall from "../../components/PreviewSmall/PreviewSmall";
import Bringing from '../../components/Bringing/Bringing';
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

function Earphones() {
  
  return (
    <div className="Headphones">
      <Header pageHeader="EARPHONES" />

      <Products
        imgSrc={process.env.PUBLIC_URL + '/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'}
        overline='NEW PRODUCT'
        heading='YX1 WIRELESS EARPHONES'
        description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
        displayImageFirst={true}
        buttonSeeProduct={true}
        productUrl='/yx1'
      />

      <PreviewSmall />
      <Bringing />
    </div>
  );
}

export default Earphones;
