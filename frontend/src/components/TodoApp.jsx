// src/TodoApp.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
  // État pour stocker la liste des tâches
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  // Charger les tâches depuis l'API
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/tasklist')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des tâches:', error);
      });
  }, []); // Cette dépendance vide signifie que l'effet s'exécute uniquement au montage du composant

  // Ajouter une nouvelle tâche
  const handleAddTask = () => {
    if (newTask.title && newTask.description) {
      axios.post('http://localhost:3000/api/v1/tasklist', newTask)
        .then(response => {
          setTasks([...tasks, response.data]); // Ajouter la nouvelle tâche à la liste
          setNewTask({ title: '', description: '' }); // Réinitialiser les champs
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout de la tâche:', error);
        });
    }
  };

  // Gérer la modification des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Formulaire pour ajouter une tâche */}
      <div>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          placeholder="Titre de la tâche"
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Description de la tâche"
        />
        <button onClick={handleAddTask}>Ajouter la tâche</button>
      </div>

      {/* Liste des tâches */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <small>{new Date(task.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
