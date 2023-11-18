import React from 'react';
import '../index.css';

export default function Footer() {
    return (
        <>
        <div className='footer'>
            <div className="footer-info footer-section">
                <p className="footer-heading">MentorHUB</p>
                <p className="footer-text">Just answer a few questions about what you want to learn and get the personalized mentor according to your need.</p>
            </div>
            <div className="footer-company footer-section">
                <p className="footer-heading">Company</p>
                <p className="footer-text">Contact</p>
                <p className="footer-text">News</p>
                <p className="footer-text">Status</p>
            </div>
            <div className="footer-products footer-section">
                <p className="footer-heading">Products</p>
                <p className="footer-text">Rest API</p>
                <p className="footer-text">Javascript SDK</p>
                <p className="footer-text">Unity SDK</p>
            </div>
            <div className="footer-community footer-section">
                <p className="footer-heading">Community</p>
                <p className="footer-text">Discord</p>
                <p className="footer-text">Twitter</p>
                <p className="footer-text">Linkedin</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-bottom-text">&#169; 2023 Exodus. All rights reserved with &#10084;</p>
        </div>
        </>
    );
}