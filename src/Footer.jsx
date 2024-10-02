// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@travelexplorer.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
