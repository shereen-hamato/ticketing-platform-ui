import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/layout/SearchBar";
import EventCard from "../components/event/EventCard";
import Footer from "../components/layout/Footer";



const HomePage = () => {
    const events = [
        { image: "/assets/event1.jpg", title: "Concert A", date: "Jan 20, 2024", location: "New York" },
        { image: "/assets/event2.jpg", title: "Festival B", date: "Feb 15, 2024", location: "Los Angeles" },
        { image: "/assets/event3.jpg", title: "Theater C", date: "Mar 10, 2024", location: "Chicago" },
        { image: "/assets/event1.jpg", title: "Concert A", date: "Jan 20, 2024", location: "New York" },
        { image: "/assets/event2.jpg", title: "Festival B", date: "Feb 15, 2024", location: "Los Angeles" },
        { image: "/assets/event3.jpg", title: "Theater C", date: "Mar 10, 2024", location: "Chicago" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <Navbar />
            <SearchBar onSearch={handleSearch} />
            <div className="event-grid">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default HomePage;
