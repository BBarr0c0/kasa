import React from 'react';
import '../styles/banner.scss';

const Banner = ({ image, text }) => {
    return (
        <div className="banner">
            <img src={image} alt="Banner" className="banner-image" />
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    );
};

export default Banner;