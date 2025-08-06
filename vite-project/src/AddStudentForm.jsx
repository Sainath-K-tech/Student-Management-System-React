import React, { useState } from 'react';
import './AddStudentForm.css'; // external CSS file

function AddStudentForm({ onAddStudent }) {
  const [id, setid] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [branch, setBranch] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !name || !age || !branch || !marks) return;

    onAddStudent({ id: Number(id) ,name, age: Number(age), branch,marks: Number(marks) });
    setid('');
    setName('');
    setAge('');
    setBranch('');
    setMarks('');
  };

  return (
    <form className="id-card-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Student ID Form</h2>
      <input
        className="form-input"
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setid(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="text"
        placeholder="Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
      />
      <button className="form-button" type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
