import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <div className='heading-text-container'>
            <p className='heading-text heading-1'>LEARN FROM</p>
            <p className='heading-text heading-2'>THE BEST</p>
            <p className='heading-text heading-3'>MENTORS...</p>
            </div>
            <p className="subheading-text">Just answer a few questions about what you want to learn and get the personalized mentor according to your need. You can choose from various mentors available in the list, handpicked for you.</p>
            <div className="mission">
                <div className='mission-box'></div>
                <p className="our-mission">Our Mission</p>
                <p className="mission-text">We want to ensure accurate and effective mentor matches based on user specifications.</p>
                <div className='stats-box'>
                    <p className="stat-heading">MENTORS CONNECTED</p>
                    <p className="stat-content">20+</p>
                </div>
                <div className='stats-box stats-box-2'>
                    <p className="stat-heading">USER INTERACTIONS</p>
                    <p className="stat-content ">53+</p>
                </div>
            </div>
            <div className="features">
                <h3 className="features-heading">BUILD BY DEVELOPERS, <span className="further-next-line">FOR DEVELOPERS</span></h3>
                <h4 className="feature">Simple Questions</h4>
                <h4 className="feature">Multiple Roadmaps</h4>
                <h4 className="feature-text">We are giving different path of learning to student based on many factors like expeience, tech stack etc.</h4>
                <h4 className="feature">AI Driven Search</h4>
                <h4 className="feature">User Friendly Interface</h4>
            </div>
            <div className="red-box-container">
                <h2 className="red-box-heading">Get A Perfect Mentor Like No Other</h2>
                <p className="red-box-content">Powering Success for Thousands – Connect with the Best Mentors in Your Field.</p>
                <button className='red-box-button'>EXPLORE MENTORS</button>
            </div>
            <div className="nft-container">
                <div className="nft-left">
                    <h3 className="nft-heading">Introducing The Future Of Mentorship: <span className="transpirant">MentorHub</span></h3>
                </div>
                <div className="nft-right">
                    <p className="nft-text">Empowering Thousands on Their Journey</p>
                    <p className="nft-text">Connect with the Right Mentors, Every Time</p>
                    <p className="nft-text">Connect with the Right Mentor for Your Journey.</p>
                    <button className="nft-button header-button">BUILD A SMART NFT</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}