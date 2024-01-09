import React from 'react';
import './Footer.css';

function Footer() {
    return ( 
    <footer>
        <div className="footer-container">
            <a className="footer-brand" href="/">
              <img src="/assets/shared/desktop/logo.svg" alt="audiophile"/>
            </a>
            <div className='footer-links'>
                <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="/">HEADPHONES</a></li>
                  <li><a href="/">SPEAKERS</a></li>
                  <li><a href="/">EARPHONES</a></li>
                </ul>
            </div>
            <p className='Audiophile'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            <p className='copyright'>Copyright 2021. All Rights Reserved</p>
          
            <div className="logos">
                <ul className="social-media-list">
                    <li><a className="footer-logo" href="/">
                        <img src="/assets/shared/desktop/icon-facebook.svg" alt="facebook"/>
                        </a>
                    </li>
                    <li><a className="footer-logo" href="/">
                    <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter"/>
                        </a>
                    </li>
                    <li><a className="footer-logo" href="/">
                    <img src="/assets/shared/desktop/icon-instagram.svg" alt="instagram"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
     );
}

export default Footer;