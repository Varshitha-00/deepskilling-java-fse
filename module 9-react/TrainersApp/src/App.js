import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import TrainersList from './Trainerlist';
import TrainerDetails from './TrainerDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/trainers">Trainers</Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainers/:id" element={<TrainerDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
