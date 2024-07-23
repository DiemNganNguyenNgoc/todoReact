// src/components/AddTodoForm.jsx
import React, { useState } from 'react';
import './Detail.css';

const AddTodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      onAdd({ title, details });
      setTitle('');
      setDetails('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter task title" 
        required 
      />
      <textarea 
        value={details} 
        onChange={(e) => setDetails(e.target.value)} 
        placeholder="Enter task details" 
        required 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
