import React from 'react';

function App() {
  const heading = 'Office Space Rental';
  const officeImage =
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80';

  const offices = [
    { name: 'Skyline Hub', rent: 55000, address: 'MG Road, Bangalore' },
    { name: 'Metro Plaza', rent: 65000, address: 'Koramangala, Bangalore' },
    { name: 'WorkNest', rent: 48000, address: 'Indiranagar, Bangalore' }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', background: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ color: '#0f172a', textAlign: 'center' }}>{heading}</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src={officeImage} alt="Office space" style={{ width: '700px', height: '320px', objectFit: 'cover', borderRadius: '12px' }} />
      </div>

      <div style={{ display: 'grid', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
        {offices.map((office, index) => (
          <div key={index} style={{ background: '#ffffff', padding: '16px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
            <h3>{office.name}</h3>
            <p><strong>Rent:</strong> <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>₹{office.rent}</span></p>
            <p><strong>Address:</strong> {office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
