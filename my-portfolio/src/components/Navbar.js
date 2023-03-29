import './Navstyles.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import Portfolio from '../routes/Portfolio';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" :
            "header"}>
            <Link to="/portfolio">
                <h1>Ousman Sayeed.</h1>
            </Link>

            <ul className={click ? 'nav-menu active' :
                'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='dropMenu' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "white" }} />
                ) : (
                    <FaBars size={20} style={{ color: "white" }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;