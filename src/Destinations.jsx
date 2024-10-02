// src/components/Destinations.js
import React from 'react';
import './Destinations.css';

const destinations = [
    { 
        name: 'Paris', 
        description: 'The city of light and love.', 
        image: 'https://media.istockphoto.com/id/1423124357/photo/eiffel-tower-with-blue-sky-classical-paris-photo-france-capital-city-esplanade-du-trocadero.jpg?s=612x612&w=0&k=20&c=T5VF1AhuLTSlf8fe46O7yPgrQf-DS-AULzHOkfN1G-M='
        // Use the path to your image
    },
    { 
        name: 'New York', 
        description: 'The city that never sleeps.', 
        image:'https://media.istockphoto.com/id/533998713/photo/empire-state-building-at-night.jpg?s=612x612&w=0&k=20&c=2fZCcZq3186F9R2WHZ2hEBh4dVsOX7pqgcVRXXn195I='
 
    },
    { 
        name: 'Bali', 
        description: 'A tropical paradise.', 
        image:'https://www.holidify.com/images/bgImages/BALI.jpg'
 
    },
    { 
        name: 'Tokyo', 
        description: 'The heart of Japan.', 
        image:'https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg'
 
    },
    { 
        name: 'Thailand', 
        description: 'The Land of Smiles.', 
        image:'https://www.kids-world-travel-guide.com/images/thailand_chiangmai_inthanonmountain-2.jpg'
 
    },
];

const Destinations = () => {
    return (
        <section className="destinations-section">
            <h2>Popular Destinations</h2>
            <div className="destinations">
                {destinations.map((dest, index) => (
                    <div className="destination-card" key={index}>
                        <img src={dest.image} alt={dest.name} className="destination-image" />
                        <h3>{dest.name}</h3>
                        <p>{dest.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
