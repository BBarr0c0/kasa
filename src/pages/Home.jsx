import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/home.scss';
import Banner from '../components/Banner';
import bannerHome from '../assets/banner_home.png';

const Home = () => {
    const [properties, setProperties] = useState([]); // État pour stocker les données

    useEffect(() => {
        // Charger les données de data.json
        fetch('/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données.');
                }
                return response.json();
            })
            .then((data) => {
                setProperties(data); // Met à jour l'état avec les données
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    }, []);

    return (
        <div className="home">
            <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
            <h1>Propriétés disponibles</h1>
            <div className="properties-grid">
                {properties.map((property) => (
                    <Link to={`/property/${property.id}`} key={property.id}>
                        <div className="property-card">
                            <img src={property.cover} alt={property.title} className="property-image" />
                            <div className="property-title">{property.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;