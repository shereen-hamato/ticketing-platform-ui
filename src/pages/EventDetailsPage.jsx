import React, { useState } from 'react';
import '../styles/EventDetailsPage.css';

const EventDetailsPage = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value > 0 ? value : 1);
    };

    const addToCart = () => {
        alert(`Added ${quantity} ticket(s) to the cart!`);
    };

    return (
        <div className="event-details-page">
            {/* Banner Section */}
            <div className="event-banner">
                <img
                    src="https://via.placeholder.com/1200x400"
                    alt="Event Banner"
                    className="banner-image"
                />
            </div>

            {/* Event Info Section */}
            <div className="event-info">
                <h1>Event Title</h1>
                <p><strong>Date:</strong> January 15, 2024</p>
                <p><strong>Location:</strong> New York City, NY</p>
                <p>
                    <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
            </div>

            {/* Booking Section */}
            <div className="booking-section">
                <h2>Book Tickets</h2>
                <div className="ticket-options">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>
                <button onClick={addToCart} className="add-to-cart">
                    Add to Cart
                </button>
            </div>

            {/* Recommended Events Section */}
            <div className="recommended-events">
                <h2>Recommended Events</h2>
                <div className="events-grid">
                    <div className="event-card">
                        <img
                            src="https://via.placeholder.com/200x100"
                            alt="Event 1"
                            className="event-image"
                        />
                        <p>Event 1</p>
                        <button className="view-event">Learn More</button>
                    </div>
                    <div className="event-card">
                        <img
                            src="https://via.placeholder.com/200x100"
                            alt="Event 2"
                            className="event-image"
                        />
                        <p>Event 2</p>
                        <button className="view-event">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;
