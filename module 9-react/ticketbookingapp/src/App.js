import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flights = [
    { route: 'Delhi → Mumbai', time: '06:30 AM', price: '₹4,500' },
    { route: 'Bangalore → Hyderabad', time: '09:15 AM', price: '₹3,200' },
    { route: 'Chennai → Kolkata', time: '01:40 PM', price: '₹5,100' }
  ];

  const guestPage = (
    <div style={styles.card}>
      <h2>Welcome Guest</h2>
      <p>You can browse available flights before logging in.</p>
      <h3>Available Flights</h3>
      {flights.map((flight, index) => (
        <div key={index} style={styles.flightBox}>
          <p><strong>{flight.route}</strong></p>
          <p>Time: {flight.time}</p>
          <p>Price: {flight.price}</p>
        </div>
      ))}
      <button style={styles.button} onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  );

  const userPage = (
    <div style={styles.card}>
      <h2>Welcome User</h2>
      <p>You are logged in and can book tickets.</p>
      <button style={styles.button} onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );

  return (
    <div style={styles.container}>
      <h1>Flight Ticket Booking</h1>
      {isLoggedIn ? userPage : guestPage}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '24px',
    maxWidth: '800px',
    margin: '0 auto',
    background: '#f8fafc',
    minHeight: '100vh'
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
  },
  flightBox: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px'
  },
  button: {
    padding: '8px 14px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '6px',
    background: '#2563eb',
    color: '#fff'
  }
};

export default App;
