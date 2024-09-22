import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventBoxes = () => {
    const [events, setEvents] = useState([]);
    const eventsName = ['TALENT HUNT', 'PERFECT PAIR', 'WALL OF IMAGINATION', 'TUG OF WAR', 'ARM WESTLING', 'CARDS CASTLE CHALLENGE', 'DORA THE EXPLORER', 'BALLON POP RELAY', 'CUP HEAD CHALLENGE', 'FUN WITH BLINDFOLD']

    useEffect(() => {
        const eventBoxes = [];
        for (let i = 1; i <= 10; i++) {
            eventBoxes.push(
                <div key={i} className="event-box">
                    <h2> {eventsName[i - 1]}</h2>
                    <Link to={`/events/${i}`}>
                        <button className="see-more-btn">See More</button>
                    </Link>
                </div>
            );
        }
        setEvents(eventBoxes);
    }, []);

    return <div className="events-container">{events}</div>;
};

export default EventBoxes;