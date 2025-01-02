import React from "react";

const ExploreGroups = () => (
    <section className="explore-groups">
        <h2>Explore Popular Groups</h2>
        <div className="group-grid">
            {["Tech Enthusiasts", "Fitness Lovers", "Art and Design", "Startup Founders", "Photography Club", "Travel Buddies"].map((group, index) => (
                <div className="group-card" key={index}>
                    <img src={`https://via.placeholder.com/150?text=${group}`} alt={group} />
                    <h3>{group}</h3>
                    <p>Join the {group} to meet like-minded people and share your passion!</p>
                </div>
            ))}
        </div>
    </section>
);
export default ExploreGroups;