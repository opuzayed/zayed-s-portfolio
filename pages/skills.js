import React from 'react';
import AllSkills from '../components/AllSkills';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';

const skills = () => {
    return (
        <div>
            <Navbar/>
            <AllSkills/>
            <Footer/>
        </div>
    );
};

export default skills;