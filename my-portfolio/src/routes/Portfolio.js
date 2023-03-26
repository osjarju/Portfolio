import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsMid from '../components/ProjectsMid';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <ProjectsMid heading="PROJECTS." text="Recent works" />
            <Footer />
        </div>
    );
};

export default Portfolio;