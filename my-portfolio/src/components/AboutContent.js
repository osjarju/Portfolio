import './AboutContentStyles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import R1 from '../assets/R1.jpg'
import R2 from '../assets/R2.jpg'


const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>HELLO!</h1>
                <p>I'm a problem solver. Download my CV,
                    to have a glimpse of qualifications and experiences.</p>
                <NavLink to='https://docs.google.com/forms/d/1kD3vP06i64B7zMbI8eqRz6PTsTtFTJaEpYHg2m8sr_M/edit'>
                    <button className='btn'>DOWNLOAD CV</button>
                </NavLink>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack-top'>
                        <img src={R1} className='img' alt='comp' />
                    </div>
                    <div className='img-stack-bottom'>
                        <img src={R2} className='img' alt='comp' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;