// src/components/Contact.js
import React from 'react';

import './Contact.css'
const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
