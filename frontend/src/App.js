import React, { useState, useEffect } from 'react';
import './styles.css'; 
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import CategoryList from './components/CategoryList.js';
import axios from 'axios'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/tasks', {
        withCredentials: false
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categories', {
        withCredentials: false
      });
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
