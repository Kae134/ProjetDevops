import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
};

export default App;
