// src/components/TaskForm.js
import React, { useState } from 'react';
import api from '../api';

function TaskForm({ fetchTasks, categories }) {
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', {
        title,
        category_id: categoryId,
        is_completed: false,
      });
      setTitle('');
      setCategoryId('');
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>New Task</h2>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">+ Add Task</button>
    </form>
  );
}

export default TaskForm;
