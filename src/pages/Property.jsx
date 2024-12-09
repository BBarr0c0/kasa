import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/pages/property.scss';

const Property = () => {
    const { id } = useParams(); // Récupère l'ID de la propriété depuis l'URL
    const [property, setProperty] = useState(null); // Stocke les données de la propriété
    const navigate = useNavigate(); // Pour rediriger en cas d'erreur (par exemple, propriété introuvable)

    useEffect(() => {
        // Charger les données depuis data.json
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedProperty = data.find((item) => item.id === id);
                if (!selectedProperty) {
                    navigate('/404'); // Redirige vers une page 404 si l'ID est introuvable
                } else {
                    setProperty(selectedProperty);
                }
            })
            .catch((error) => console.error('Erreur lors du chargement des données:', error));
    }, [id, navigate]);

    if (!property) {
        return <div>Chargement...</div>; // Affichage temporaire pendant le chargement
    }

    return (
        <div className="property">
            {/* Carousel */}
            <div className="carousel">
                {property.pictures.map((picture, index) => (
                    <img key={index} src={picture} alt={`Slide ${index + 1}`} />
                ))}
            </div>

            {/* Titre et Host */}
            <div className="header">
                <div className="title">
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>
                </div>
                <div className="host">
                    <p>{property.host.name}</p>
                    <img src={property.host.picture} alt={property.host.name} />
                </div>
            </div>

            {/* Tags et Rating */}
            <div className="tags-rating">
                <div className="tags">
                    {property.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="rating">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className={index < property.rating ? 'star filled' : 'star'}>★</span>
                    ))}
                </div>
            </div>

            {/* Description et Équipements */}
            <div className="details">
                <div className="description">
                    <h2>Description</h2>
                    <p>{property.description}</p>
                </div>
                <div className="equipments">
                    <h2>Équipements</h2>
                    <ul>
                        {property.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Property;