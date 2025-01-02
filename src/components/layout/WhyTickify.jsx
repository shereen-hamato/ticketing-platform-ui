import React from "react";

const EventCard = ({ title, description }) => (
    <div className="event-card">
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);

const WhyTickify = () => (
    <section className="why-tickify">
        <h2>Why Choose Tickify?</h2>
        <div className="benefits">
            {[
                {
                    icon: "🌟",
                    title: "Connect with People",
                    description: "Join a vibrant community of like-minded individuals.",
                    events: [
                        { title: "Networking Night", description: "Meet professionals in your field." },
                        { title: "Community Gathering", description: "Share ideas and collaborate." }
                    ]
                },
                {
                    icon: "🎉",
                    title: "Exciting Experiences",
                    description: "Explore thrilling events and memorable activities.",
                    events: [
                        { title: "Music Festival", description: "Enjoy live performances and entertainment." },
                        { title: "Adventure Hike", description: "Discover scenic trails with friends." }
                    ]
                },
                {
                    icon: "🔒",
                    title: "Safe and Trusted",
                    description: "Enjoy peace of mind with verified and secure platforms.",
                    events: [
                        { title: "Safety Workshop", description: "Learn safety measures for events." },
                        { title: "Secure Meetup", description: "Experience events in a trusted environment." }
                    ]
                },
                {
                    icon: "📈",
                    title: "Growth Opportunities",
                    description: "Learn, network, and grow personally and professionally.",
                    events: [
                        { title: "Skill Development Seminar", description: "Enhance your professional skills." },
                        { title: "Startup Networking", description: "Connect with entrepreneurs and investors." }
                    ]
                }
            ].map((benefit, index) => (
                <div className="benefit" key={index}>
                    <span className="benefit-icon" style={{ transform: `scale(${1 + index * 0.1})`, transition: 'transform 0.3s' }}>{benefit.icon}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                    <div className="benefit-events">
                        {benefit.events.map((event, i) => (
                            <EventCard key={i} title={event.title} description={event.description} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);
export default WhyTickify;