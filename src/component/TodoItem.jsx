// src/components/TodoItem.jsx
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onClick, onDelete }) => {
  return (
    <div className="todo-item">
      <h2 onClick={() => onClick(todo)}>{todo.title}</h2>
      <button className="delete-button" onClick={(e) => {
        e.stopPropagation(); 
        onDelete(todo);
      }}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
