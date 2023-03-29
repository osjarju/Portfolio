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
      <ProjectsMid heading="ABOUT ME." text="I am originally from The Gambia. Lived in the US
      for a little over 10 years now. Through this period, I have been resident in the
      state of Alaska, Maryland and now Washington State." />
      {/* <CV /> */}
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About