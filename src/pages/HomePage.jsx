import React, {useState, useEffect} from "react";
import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/layout/SearchBar";
import EventCard from "../components/event/EventCard";
import Footer from "../components/layout/Footer";
import serviceApi from "../services/serviceApi";


const HomePage = () => {
    // const events = [
    //     { image: "/assets/event1.jpg", title: "Concert A", date: "Jan 20, 2024", location: "New York" },
    //     { image: "/assets/event2.jpg", title: "Festival B", date: "Feb 15, 2024", location: "Los Angeles" },
    //     { image: "/assets/event3.jpg", title: "Theater C", date: "Mar 10, 2024", location: "Chicago" },
    //     { image: "/assets/event1.jpg", title: "Concert A", date: "Jan 20, 2024", location: "New York" },
    //     { image: "/assets/event2.jpg", title: "Festival B", date: "Feb 15, 2024", location: "Los Angeles" },
    //     { image: "/assets/event3.jpg", title: "Theater C", date: "Mar 10, 2024", location: "Chicago" },
    // ];
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Events from Backend
    const fetchEvents = async () => {
        try {
            const response = await serviceApi.get("/events"); // Replace with your endpoint
            setEvents(response.data); // Update state with events data
        } catch (err) {
            setError("Failed to fetch events. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);


    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = events.filter(event =>
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    if (loading) return <p>Loading events...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
            <Navbar/>
            <SearchBar onSearch={handleSearch}/>
            <div className="event-grid">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
            <Footer/> {/* Add Footer here */}
        </div>
    );
};

export default HomePage;
