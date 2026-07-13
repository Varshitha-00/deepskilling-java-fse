import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [clicked, setClicked] = useState('');
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setMessage('Hello! This is a static message.');
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const sayWelcome = (text) => {
    setMessage(text);
  };

  const handleSyntheticClick = (event) => {
    event.preventDefault();
    setClicked('I was clicked');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = Number(rupees);
    if (!Number.isNaN(amount)) {
      setEuro((amount / 90).toFixed(2));
    } else {
      setEuro('0.00');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React Event Examples</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount} style={{ marginLeft: '10px' }}>Decrement</button>
        <p>{message}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Welcome Message</h2>
        <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Synthetic Event</h2>
        <button onClick={handleSyntheticClick}>OnPress</button>
        <p>{clicked}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Currency Convertor</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            placeholder="Enter INR"
            style={{ marginRight: '10px' }}
          />
          <button type="submit">Convert</button>
        </form>
        <p>Euro: {euro}</p>
      </div>
    </div>
  );
}

export default App;
