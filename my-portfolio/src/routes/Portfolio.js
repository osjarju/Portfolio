import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsMid from '../components/ProjectsMid';
import Works from '../components/Works';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <ProjectsMid heading="PROJECTS." text="Recent works" />
            <Works />
            <Footer />
        </div>
    );
};

export default Portfolio;