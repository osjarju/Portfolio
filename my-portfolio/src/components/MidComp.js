import './Midstyles.css';
import React from 'react';
import IntroImg from '../assets/Ousman_SAYEED.jpg';
import { Link } from "react-router-dom";

const MidComp = () => {
    return (
        <div className='mid'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} alt="IntroImg" />
            </div>
            <div className='content'>
                <p>HI, I'M A</p>
                <h1>Full Stack Developer</h1>
                <div>
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default MidComp;



