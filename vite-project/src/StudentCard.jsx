import React from 'react';
import './StudentCard.css'; // Optional: for nice styling

function StudentCard({ student, onDelete }) {
  const status = student.marks >= 50 ? 'Passed' : 'Failed';
  const statusClass = status === 'Passed' ? 'status-pass' : 'status-fail';

  return (
    <div className="student-card">
      {/* ⛔ Delete icon on top-right */}
      <button className="delete-icon" onClick={onDelete} title="Delete Student">
        ⛔
      </button>
      <p>ID: {student.id}</p>
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <h3>{student.branch}</h3>
      <p>Marks: {student.marks}</p>
      <p className={`student-status ${statusClass}`}>Status: {status}</p>
    </div>
  );
}


export default StudentCard;
