import React from 'react';

import "./Hero.css"
import heroImage from "./assets/typewriter-bg.svg"

const Hero = () => {
    return ( 
        <div className="Hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Type your heart out. Express yourself freely.</h1>
                    <h4>Short stories, poems, fiction, are the names of just few citizens in our community.</h4>
                    <button className="adventure-btn">Start My Adventure!</button>
                </div>
                 <div className="hero-img"> 
                    <img src={heroImage}/>
                 </div>
                 
                 
            </div>

            <svg viewBox="0 0 1440 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M698.52 89.2243C571.882 58.7301 255.351 9.35063 2.33907 55.7859L-27 252H1442.94V42.2212C1445.09 10.3601 1392.61 -34.2455 1165.46 42.2212C938.305 118.688 759.519 105.418 698.52 89.2243Z" fill="#ECF4FC"/>
            </svg>
        </div>
     );
}
 
export default Hero;