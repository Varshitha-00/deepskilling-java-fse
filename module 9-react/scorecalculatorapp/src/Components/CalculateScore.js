import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const average = total / 5;
  const goalMet = average >= goal / 5;

  return (
    <div className="score-card">
      <h2>Calculate Score</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
      <p className={goalMet ? 'goal-met' : 'goal-not-met'}>
        {goalMet ? 'Goal achieved!' : 'Goal not achieved.'}
      </p>
    </div>
  );
}

export default CalculateScore;
