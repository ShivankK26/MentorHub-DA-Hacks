import React from 'react';
import '../index.css';

export default function Header() {
    return (
        <div className='header'>
            {/* <img className='logo' src="/logo.png" alt="logo" /> */}
            <div className='header-links'>
                <a className='header-link' href="#">MENTORS</a>
                <a className='header-link' href="#">ROADMAPS</a>
                <a className='header-link' href="#">RESOURCES</a>
                <a className='header-link' href="#">CONTACT</a>
            </div>
            <button className='header-button'>GET STARTED</button>
        </div>
    );
}