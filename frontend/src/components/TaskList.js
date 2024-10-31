import React, { useState } from 'react';
import api from '../api';

function TaskList({ tasks, fetchTasks }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTaskTitle, setUpdatedTaskTitle] = useState('');

  const toggleTaskStatus = async (taskId, isCompleted) => {
    try {
      await api.put(`/tasks/${taskId}`, {
        is_completed: !isCompleted,
      });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task status:', error);
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

  const startEditingTask = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTaskTitle(task.title);
  };

  const cancelEditingTask = () => {
    setEditingTaskId(null);
    setUpdatedTaskTitle('');
  };

  const saveUpdatedTask = async (taskId) => {
    try {
      await api.put(`/tasks/${taskId}`, { title: updatedTaskTitle });
      setEditingTaskId(null);
      setUpdatedTaskTitle('');
      fetchTasks();
    } catch (error) {
      console.error('Error updating task title:', error);
    }
  };
  

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item" style={{ color: task.is_completed ? 'red' : 'black' }}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={updatedTaskTitle}
                  onChange={(e) => setUpdatedTaskTitle(e.target.value)}
                />
                <button onClick={() => saveUpdatedTask(task.id)}>Save</button>
                <button onClick={cancelEditingTask}>Cancel</button>
              </div>
            ) : (
              <div>
                <span style={{ textDecoration: task.is_completed ? 'line-through' : 'none' }}>
                  {task.title}
                </span>
                <div>
                  <button onClick={() => toggleTaskStatus(task.id, task.is_completed)}>
                    {task.is_completed ? 'Pending' : 'Complete'}
                  </button>
                  <button onClick={() => startEditingTask(task)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
