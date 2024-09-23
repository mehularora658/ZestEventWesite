import React from 'react'
import './App.css';
import EventBoxes from './EventBoxes';
const Home = () => {
    return (
        <>
            <nav>
                <div class="logo">Carnival 2k24</div>
                <ul>

                </ul>
            </nav>
            <main>
                <h1 className='heading'>INFORMALZ EVENTS</h1>
                <div class="events-container">
                    <EventBoxes />
                </div>
            </main>
        </>
    )
}

export default Home