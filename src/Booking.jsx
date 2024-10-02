// src/components/Booking.js
import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [travelers, setTravelers] = useState('');
    const [destination, setDestination] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Set the confirmation message
        setConfirmationMessage(`Booking confirmed for ${name} to ${destination} on ${date} for ${travelers} traveler(s)!`);
        // Clear the form
        setName('');
        setEmail('');
        setDate('');
        setTravelers('');
        setDestination('');
    };

    return (
        <section className="booking-section">
            <h2>Book Your Trip</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Number of Travelers"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
                <button type="submit">Book Now</button>
            </form>
            {confirmationMessage && (
                <p className="confirmation">{confirmationMessage}</p>
            )}
        </section>
    );
};

export default Booking;
