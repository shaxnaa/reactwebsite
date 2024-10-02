// src/components/Home.js
import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <section className="home-section">
            <div className="welcome">
                <h1>Welcome to Travel Explorer</h1>
                <p>Your adventure begins here!</p>
                <button className="explore-button">Explore Now</button>
            </div>
        </section>
    );
};

export default Home;
