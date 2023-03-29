import React from 'react';
import Navbar from '../components/Navbar';
import MidComp from '../components/MidComp';
// import RecentWorks from '../components/RecentWorks';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <MidComp />
            {/* <RecentWorks /> */}
            <Footer />
        </div>
    )
}

export default Home