import React from 'react';
import CohortDetails from './Components/CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    {
      name: 'React Batch 1',
      status: 'ongoing',
      startDate: '2026-07-01',
      endDate: '2026-09-30',
      mentor: 'Priya Sharma',
    },
    {
      name: 'Java Batch 4',
      status: 'completed',
      startDate: '2026-03-05',
      endDate: '2026-05-28',
      mentor: 'Rohit Verma',
    },
    {
      name: 'Angular Batch 2',
      status: 'ongoing',
      startDate: '2026-06-01',
      endDate: '2026-08-31',
      mentor: 'Shweta Singh',
    },
  ];

  return (
    <div className="App">
      <h1>My Academy Cohorts</h1>
      <div className="cohort-list">
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
