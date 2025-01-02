import React from "react";

const UpcomingEvents = () => (
    <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
            {[1, 2, 3, 4, 5, 6].map((event, index) => (
                <div className="event-card" key={index}>
                    <img src="https://via.placeholder.com/250" alt="Event" />
                    <h3>Event Title {index + 1}</h3>
                    <p>Don’t miss out on this exciting event happening near you!</p>
                    <button>Learn More</button>
                </div>
            ))}
        </div>
    </section>
);
export default UpcomingEvents;