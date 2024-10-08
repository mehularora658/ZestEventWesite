import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventBoxes = () => {
    const [events, setEvents] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
        const eventBoxes = [];
        const eventsName = ['TALENT HUNT', 'PERFECT PAIR', 'WALL OF IMAGINATION', 'TUG OF WAR', 'ARM WESTLING', 'CARDS CASTLE CHALLENGE', 'DORA THE EXPLORER', 'BALLON POP RELAY', 'CUP HEAD CHALLENGE', 'FUN WITH BLINDFOLD']

        for (let i = 1; i <= 10; i++) {
            eventBoxes.push(
                <div key={i} className="event-box">
                    <Link className='eventBoxLink' to={`/events/${i}`}>
                        <h2 classname="eventsBoxHeading"> {eventsName[i - 1]}</h2>

                    </Link>
                </div>
            );
        }
        setEvents(eventBoxes);
    }, []);
    // eslint-disable-next-line
    return <div className="events-container">{events}</div>;
};

export default EventBoxes;