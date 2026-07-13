import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  const isDark = theme === 'dark';

  return (
    <div style={{ ...styles.card, background: isDark ? '#1f2937' : '#f8fafc', color: isDark ? '#fff' : '#111827' }}>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <button style={{ ...styles.button, ...(isDark ? styles.darkButton : styles.lightButton) }}>
        View Profile
      </button>
      <button style={{ ...styles.button, ...(isDark ? styles.darkButton : styles.lightButton), marginLeft: '8px' }}>
        Edit
      </button>
    </div>
  );
}

const styles = {
  card: {
    padding: '16px',
    borderRadius: '10px',
    marginBottom: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
  },
  button: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  lightButton: {
    background: '#2563eb',
    color: '#fff'
  },
  darkButton: {
    background: '#f59e0b',
    color: '#111827'
  }
};

export default EmployeeCard;
