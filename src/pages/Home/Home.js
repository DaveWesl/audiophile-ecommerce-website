import React from "react";
import "./Home.css";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import PreviewSmall from "../../components/PreviewSmall/PreviewSmall";

function Home() {
  return (
    <div className="desktop-home">
      <HomeHeader />
      <PreviewSmall />
      <div className="home-presentation">
        <div className="home-zx9">
          <img className="home-img-zx9 home-img" src="/" alt="ZX9 Speaker"/>
          <div className="home-text-zx9">
            <h1 className="home-h1">ZX9 SPEAKER</h1>
            <p className="home-p">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button className="button-2 button-2-zx9">SEE PRODUCT</button>
          </div>
        </div>

        <div className="home-zx7">
          <div className="home-text-zx7">
            <h3 className="home-h1">ZX7 SPEAKER</h3>
            <button className="button-2 button-2-zx7">SEE PRODUCT</button>
          </div>
          <img className="home-img-zx7 home-img" src="/" alt="ZX7 Speaker"/>
        </div>

        <div className="home-yx1">
          <img className="home-img-yx1 home-img" src="/" alt="YX1 Speaker"/>
          <div className="home-text-yx1">
            <h3 className="home-h1">YX1 EARPHONES</h3>
            <button className="button-2 button-2-yx1">SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
