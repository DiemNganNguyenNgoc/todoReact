// src/App.jsx
import React, { useState } from 'react';
import TodoItem from './component/TodoItem';
import Modal from './component/Modal';
import AddTodoForm from './component/Detail';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (todoToRemove) => {
    setTodos(todos.filter(todo => todo !== todoToRemove));
  };

  const handleTodoClick = (todo) => {
   
    setSelectedTodo(todo);
    
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
  };

  return (
    <div className="app">
      
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index, detail) => (
          <TodoItem 
            key={index} 
            todo={todo} 
            onClick={handleTodoClick} 
            onDelete={removeTodo} 
          />
        ))}
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        content={selectedTodo} 
      />
    </div>
  );
};

export default App;
