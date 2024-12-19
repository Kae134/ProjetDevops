import React, { useState, useEffect } from "react";
import './App.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Charger les données depuis localStorage au premier rendu
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Sauvegarder les données dans localStorage lorsque les tâches changent
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("You must write something!!!!");
    } else {
      const newTask = { text: inputValue, checked: false };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          id="input-box"
          placeholder="Add a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button id="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul id="list-container">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.checked ? "checked" : ""}
            onClick={() => toggleTask(index)}
          >
            {task.text}
            <span onClick={(e) => { e.stopPropagation(); removeTask(index); }}>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
