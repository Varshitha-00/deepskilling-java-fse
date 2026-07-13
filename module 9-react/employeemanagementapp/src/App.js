import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeesList from './EmployeesList';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div style={styles.container}>
        <h1>Employee Management</h1>
        <button style={styles.button} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '24px',
    maxWidth: '900px',
    margin: '0 auto'
  },
  button: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '16px'
  }
};

export default App;
