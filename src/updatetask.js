import React, { useState } from 'react';
import PreHeader from './preheader';
import Footer from './footer';
import './updatetask.css';

const UpdateTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [latestTask, setLatestTask] = useState('');

  const handleInputChange = (id, newText) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = { id: Date.now(), text: newTaskText, completed: false };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setLatestTask(newTaskText);
      setNewTaskText('');
    }
  };

  const handleDeleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
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
