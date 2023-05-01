import React from "react";
import './Header.css';
import propic from '../../propic.jpg';

const Header = () => {
    return (
        <nav className="header">
            <h2>Leo Messi Cafe</h2>
            <div className="picstyle">
                <img src= {propic} alt="" />
            </div>
        </nav>
    );
};


export default Header;