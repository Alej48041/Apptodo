// src/components/TaskList.js
import React from 'react';
import api from '../api';

function TaskList({ tasks, fetchTasks }) {
  const toggleTaskStatus = async (taskId, isCompleted) => {
    try {
      await api.put(`/tasks/${taskId}`, { is_completed: !isCompleted });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span style={{ textDecoration: task.is_completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <div>
              <button onClick={() => toggleTaskStatus(task.id, task.is_completed)}>
                {task.is_completed ? 'Pending' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
