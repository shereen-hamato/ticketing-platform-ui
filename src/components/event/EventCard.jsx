import React from "react";

const EventCard = ({ image, title, date, description }) => (
    <div className="event-card">
        <img
            src={image || "placeholder.jpg"}
            alt={title}
            className="event-image"
        />
        <h3>{title}</h3>
        <p>{date}</p>
        <button>Book Now</button>
    </div>
);


export default EventCard;
