import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom'
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import PreviewSmall from "../../components/PreviewSmall/PreviewSmall";
import Bringing from '../../components/Bringing/Bringing';

function Home() {
  return (
    <div className="desktop-home">
      <HomeHeader />
      <PreviewSmall />
      <div className="home-presentation">
        <div className="home-zx9">
          <div className="home-container-zx9">
            <div className="oval-copy-1 oval-copy"></div>
            <div className="oval-copy-2 oval-copy"></div>
            <div className="oval-copy-3 oval-copy"></div>
            <img className="home-img-zx9 home-img" src={process.env.PUBLIC_URL + "/assets/home/desktop/image-speaker-zx9.png"} alt="ZX9 Speaker"/>
          </div>
          <div className="home-text-zx9">
            <h1 className="home-h1">ZX9 SPEAKER</h1>
            <p className="home-p">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link to='/zx9' className="button-2 button-2-zx9">SEE PRODUCT</Link>
          </div>
        </div>

        <div className="home-zx7">
          <div className="home-text-zx7">
            <h3 className="home-h1">ZX7 SPEAKER</h3>
            <Link to='/zx7' className="button-2 button-2-zx7">SEE PRODUCT</Link>
          </div>
        </div>

        <div className="home-yx1">
          <div className="home-img-yx1 home-img"></div>
          <div className="home-text-yx1">
            <h3 className="home-h1">YX1 EARPHONES</h3>
            <Link to='/yx1' className="button-2 button-2-yx1">SEE PRODUCT</Link>
          </div>
        </div>
      </div>
      <Bringing className="App-bringing" />
    </div>
  );
}

export default Home;
