



// src/App.js
import React from 'react';

import Home from './Home';
import Destinations from './Destinations';
import Booking from './Booking';
import Contact from './Contact';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
    return (
      <div>
        <Navbar/>
        <div id="home">
                <Home />
            </div>
            <div id="destinations">
                <Destinations />
            </div>
            <div id="booking">
                <Booking />
            </div>
            <div id="contact">
                <Contact />
            </div>

       <Footer/>
       </div>
    );
}

export default App;