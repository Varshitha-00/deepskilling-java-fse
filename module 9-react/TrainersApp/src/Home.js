import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to TrainersApp</h2>
      <p>Explore the list of trainers and view their details using a simple SPA navigation.</p>
      <ul>
        <li>Trainer ID</li>
        <li>Name</li>
        <li>Phone</li>
        <li>Email</li>
        <li>Stream</li>
        <li>Skills</li>
      </ul>
    </div>
  );
}

export default Home;
