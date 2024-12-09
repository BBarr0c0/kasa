import React from 'react';
import Banner from '../components/Banner';
import bannerAbout from '../assets/banner_about.png';
import '../styles/pages/about.scss';

const About = () => {
    return (
        <div className="about">
             <Banner image={bannerAbout} />
            <h1>À Propos</h1>
            <p>Présentation de Kasa et de ses valeurs.</p>
        </div>
    );
};

export default About;