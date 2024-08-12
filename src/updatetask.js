import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PreHeader from './preheader';
import Footer from './footer';
import './updatetask.css';

const UpdateTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [latestTask, setLatestTask] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('There was an error fetching the tasks!', error));
  }, []);

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = { text: newTaskText, completed: false };
      axios.post('http://localhost:8080/api/tasks', newTask)
        .then(response => {
          setTasks(prevTasks => [...prevTasks, response.data]);
          setLatestTask(newTaskText);
          setNewTaskText('');
        })
        .catch(error => console.error('There was an error adding the task!', error));
    }
  };

  const handleDeleteTask = id => {
    axios.delete(`http://localhost:8080/api/tasks/${id}`)
      .then(() => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      })
      .catch(error => console.error('There was an error deleting the task!', error));
  };

  const handleToggleComplete = id => {
    const taskToUpdate = tasks.find(task => task.id === id);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
    axios.put(`http://localhost:8080/api/tasks/${id}`, updatedTask)
      .then(response => {
        setTasks(prevTasks =>
          prevTasks.map(task =>
            task.id === id ? response.data : task
          )
        );
      })
      .catch(error => console.error('There was an error updating the task!', error));
  };

  return (
    <div className="update-tasks-container">
      <PreHeader />
      <div className="update-tasks">
        <h2>Update Tasks</h2>
        <div className="new-task">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button onClick={handleAddTask} id="addtask">Add Task</button>
        </div>
        <div className="latest-task">
          {latestTask && <p>Latest Task: {latestTask}</p>}
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <span className="task-text">{task.text}</span>
              <div className="task-actions">
                <button onClick={() => handleToggleComplete(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateTasks;
