import React from "react";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Event Details for ID: {id}</h1>
            {/* Fetch and display detailed event information */}
        </div>
    );
};

export default EventDetailsPage;
