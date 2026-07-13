import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  const employees = [
    { id: 1, name: 'Asha', role: 'Developer' },
    { id: 2, name: 'Ravi', role: 'Manager' },
    { id: 3, name: 'Nina', role: 'Designer' }
  ];

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeesList;
