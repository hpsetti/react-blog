import React from 'react';

import "./Navbar.css"

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="nav-left">
                <div className="logoContainer">
                    <span className="icon"></span>
                </div>
                <nav>
                    <ul className="nav-left-links">
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">PODCAST</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className="nav-right">
                <nav>
                    <ul className="nav-right-links">
                        <li><button><a href="#">WRYTE A NEW BLOG</a></button></li>
                        <li><a href="#">CREATE AN ACCOUNT</a></li>
                        <li><a href="#">SIGN IN</a></li>
                    </ul>
                </nav>
            </div>
            
            
        </div>
        
     );
}
 
export default Navbar;