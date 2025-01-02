import React from "react";
import Hero from "../components/layout/Hero";
import SearchSection from "../components/layout/SearchSection";
import ExploreGroups from "../components/layout/ExploreGroups";
import UpcomingEvents from "../components/layout/UpcomingEvents";
import WhyTickify from "../components/layout/WhyTickify";
import Newsletter from "../components/layout/Newsletter";


const Dashboard = () => {
    return (
        <div className="App">
            <Hero />
            <SearchSection />
            <ExploreGroups />
            <UpcomingEvents />
            <WhyTickify />
            <Newsletter />
        </div>
    );
};

export default Dashboard;
