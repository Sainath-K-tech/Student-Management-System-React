import React from 'react';
import StudentCard from './StudentCard';

function StudentList({ students, onDeleteStudent }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={() => onDeleteStudent(student.id)} // 👈 delete logic
        />
      ))}
    </div>
  );
}

export default StudentList;
