import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventBoxes from './EventBoxes';
import EventPage from './EventPage';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventId" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;