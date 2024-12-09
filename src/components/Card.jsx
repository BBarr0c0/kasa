import React from 'react';
import '../styles/card.scss';

const Card = ({ title, cover }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card-image" />
            <div className="card-text">{title}</div>
        </div>
    );
};

export default Card;