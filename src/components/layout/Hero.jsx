import React from "react";
import '../../styles/Hero.css';

const Hero = () => (
    <section className="hero">
        <div className="hero-content">
            <h1>Discover Events That Matter to You</h1>
            <p>From professional meetups to casual get-togethers, find your community and make connections that last a lifetime.</p>
            <div className="cta-buttons">
                <button className="primary">Explore Events</button>
                <button className="secondary">Start a Group</button>
            </div>
        </div>
    </section>
);
export default Hero;