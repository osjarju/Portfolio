import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsMid from '../components/ProjectsMid';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ProjectsMid heading="CONTACT." text="Send me a message" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact