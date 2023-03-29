import './footerStyles.css';
import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='bottom-left'>
                    <div className='address'>
                        <FaHome size={20} style={{
                            color: "white", marginRight: "2rem"
                        }} />
                        <div>
                            <p>420 Burien Heights</p>
                            <p>Seattle.</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{
                            color: "white", marginRight: "2rem"
                        }} />
                            260-999-9999</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{
                            color: "white", marginRight: "2rem"
                        }} />
                            osjarju@gmail.com</h4>
                    </div>
                </div>
                <div className='bottom-right'>
                    <h4>About Me</h4>
                    <p>I am a fullstack software developer with
                        considerable amounts of experiences in various
                        critical technologies. </p>
                    <div className='socials'>
                        <NavLink to='https://www.linkedin.com/in/ousman-jarju-43a1b1270/' target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30} style={{
                            color: "white", marginRight: "1rem"
                        }} /></NavLink>
                        <NavLink to='https://twitter.com/osjarju' target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{
                            color: "white", marginRight: "1rem"
                        }} /></NavLink>
                        <NavLink to='https://github.com/osjarju' target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{
                            color: "white", marginRight: "1rem"
                        }} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer