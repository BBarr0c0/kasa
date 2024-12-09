import React from 'react';
import Banner from '../components/Banner';
import bannerAbout from '../assets/banner_about.png';
import '../styles/pages/about.scss';

const About = () => {
    return (
        <div className="about">
             <Banner image={bannerAbout} />
        </div>
    );
};

export default About;