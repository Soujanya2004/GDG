// src/App.js
import React from 'react';
import '../src/styles/tailwind.css';  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GDGEventPage from './components/GDGEventPage';
import TeamPage from './components/TeamPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GDGEventPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
