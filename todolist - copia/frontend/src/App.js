// src/App.js
import React, { useState, useEffect } from 'react';
import './styles.css'; 
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import CategoryList from './components/CategoryList.js';
import api from './api.js'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <CategoryList categories={categories} fetchCategories={fetchCategories} />
      <TaskForm fetchTasks={fetchTasks} categories={categories} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
