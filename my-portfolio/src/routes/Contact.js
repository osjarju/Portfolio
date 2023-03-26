import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsMid from '../components/ProjectsMid';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ProjectsMid heading="CONTACT." text="Let's talk" />
      <Footer />
    </div>
  )
}

export default Contact