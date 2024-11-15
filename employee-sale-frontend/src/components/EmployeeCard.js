import React from 'react';

const EmployeeCard = ({ employee, onViewResume, onSalaryClick }) => {
  return (
      <div className="employee-card">
          <img src={employee.photo} alt={employee.name} />
          <div className="name">{employee.name}</div>
          <div className="profession">{employee.profession}</div>
          <div className="salary" onClick={() => onSalaryClick(employee)}>
              ₹{employee.price.toLocaleString()}
          </div>
          <button className="resume-button" onClick={onViewResume}>View Resume</button>
      </div>
  );
};


export default EmployeeCard;
