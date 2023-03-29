import './AboutContentStyles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import S1 from '../assets/S1.jpg'
import S2 from '../assets/S2.jpg'


const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>HELLO!</h1>
                <p>I'm a problem solver. Download my CV,
                    and take a glimpse at my qualifications and experiences.</p>
                <NavLink to='https://docs.google.com/document/d/e/2PACX-1vR-mWj0iYmO_bPkbADJi692X_O0cYv5Xx5-NDkhsIh_x43U6V8mMcA-LxlvvDdu3LC8qhFJG5kVRU63/pub' target="_blank" rel="noopener noreferrer">
                    <button className='btn'>DOWNLOAD CV</button>
                </NavLink>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack-top'>
                        <img src={S1} className='img' alt='comp' />
                    </div>
                    <div className='img-stack-bottom'>
                        <img src={S2} className='img' alt='comp' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;