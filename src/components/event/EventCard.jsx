import React from "react";

const EventCard = ({image, name, date, description,location}) => (
    <div className="event-card">
        <img
            src={image || "placeholder.jpg"}
            alt={name}
            className="event-image"
        />
        <h3>{name}</h3>
        <text>{description}</text>
        <p>{date}</p>
        <p>{location}</p>
        <button>Book Now</button>
    </div>
);


export default EventCard;
