import React from "react";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div className="home-header">
      <div className="home-text">
        <div className="overline">New Product</div>
        <h1 className="mark-II-headpho">
          XX99 MARK II
          <br />
          HEADPHONES
        </h1>
        <p className="Experience">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <button className="button-1 see-product">SEE PRODUCT</button>
      </div>    
    </div>
  );
}

export default HomeHeader;
