import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/employees/')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Employees for Sale</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <img src={employee.photo_url} alt={employee.name} />
                        <h2>{employee.name}</h2>
                        <p>Profession: {employee.profession}</p>
                        <p>Price: ₹{employee.price} LPA</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
