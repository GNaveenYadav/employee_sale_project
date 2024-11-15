import React, { useState } from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard';

const employees = [
  { name: 'Akash', profession: 'Java Developer', price: 600000, photo: '/assets/employees/akash.jpg' },
  { name: 'Naveen', profession: ' Python Full Stack Developer', price: 400000, photo: '/assets/employees/naveen.jpg' },
  { name: 'Praneeth', profession: 'MERN Stack Developer', price: 650000, photo: '/assets/employees/praneeth.jpg' },
  { name: 'Hanmanthu', profession: 'Frontend Developer', price: 650000, photo: '/assets/employees/hanmanthu.jpg' },
  { name: 'Rakesh', profession: 'Data Analyst', price: 800000, photo: '/assets/employees/rakesh.jpg' },
  { name: 'Pramod', profession: 'Data Scientist', price: 600000, photo: '/assets/employees/pramod.jpg' },
  { name: 'Vikas', profession: 'UI/UX Designer', price: 900000, photo: '/assets/employees/vikas.jpg' },
  { name: 'Sai Kiran', profession: 'Embedded System Engineer', price: 1000000, photo: '/assets/employees/sai kiran.jpg' },
  { name: 'Lahir', profession: 'Data Mining Engineer', price: 750000, photo: '/assets/employees/lahir.jpg' },
];

function App() {
  const [resumeView, setResumeView] = useState(null);
  const [paymentModal, setPaymentModal] = useState(null);

  const handleViewResume = (employee) => setResumeView(employee);
  const closeResume = () => setResumeView(null);

  const handleSalaryClick = (employee) => {
    setPaymentModal(employee);
  };

  const closePaymentModal = () => {
    setPaymentModal(null);
  };

  const proceedWithPayment = () => {
    alert(`Payment of ₹${paymentModal.price.toLocaleString()} for ${paymentModal.name} was unsuccessful! it is just output purpose.  Thank You! for visiting the page.`); // Simulate payment success
    setPaymentModal(null); // Close payment modal after success
  };

  return (
    <div className="App">
      <h1 className="marquee">Employees for Sale</h1>
      <p className="description">"Explore our selection of skilled professionals available for hire at an annual rate."</p>
      <div className="employee-grid">
        {employees.map((employee, index) => (
          <EmployeeCard
          key={index}
          employee={employee}
          onViewResume={() => handleViewResume(employee)}
          onSalaryClick={handleSalaryClick}
      />
      
        ))}
      </div>

      {resumeView && (
        <div className="resume-modal">
          <button className="close-button" onClick={closeResume}>✖</button>
          <iframe src={`/assets/resumes/${resumeView.name.toLowerCase()}.pdf`} title="Resume" />
        </div>
      )}

      {paymentModal && (
        <div className="payment-modal">
          <div className="payment-modal-content">
            <h3>Confirm Payment for {paymentModal.name}</h3>
            <p>Amount: ₹{paymentModal.price.toLocaleString()}</p>
            <button className="pay-button" onClick={proceedWithPayment}>Pay Now</button>
            <button className="close-button" onClick={closePaymentModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
