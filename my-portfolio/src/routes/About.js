import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsMid from '../components/ProjectsMid';
// import CV from '../components/CV';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <ProjectsMid heading="ABOUT." text="So much beauty we forget and get reminded,
       that we can be anywhere and find it." />
      {/* <CV /> */}
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About