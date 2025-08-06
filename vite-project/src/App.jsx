import React, { useState } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';
import './App.css'; // Import the CSS file

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rebel', age: 20, branch: 'Computer Science', marks: 75 },
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

   const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app-container">
      <div className="header-card">
        <h1 className="app-title">Student Management System</h1>
      </div>
      <AddStudentForm onAddStudent={addStudent} />
      <StudentList students={students} onDeleteStudent={deleteStudent} />
      
    </div>
  );
}

export default App;
