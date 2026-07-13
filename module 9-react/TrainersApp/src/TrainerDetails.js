import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TrainersMock from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = TrainersMock.find((item) => item.trainerId === Number(id));

  if (!trainer) {
    return (
      <div className="trainer-details">
        <h2>Trainer not found</h2>
        <Link to="/trainers">Back to Trainers List</Link>
      </div>
    );
  }

  return (
    <div className="trainer-details">
      <h2>{trainer.name}</h2>
      <p><strong>ID:</strong> {trainer.trainerId}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Technology:</strong> {trainer.technology}</p>
      <p><strong>Skills:</strong> {trainer.skills.join(', ')}</p>
      <Link to="/trainers">Back to Trainers List</Link>
    </div>
  );
}

export default TrainerDetails;
