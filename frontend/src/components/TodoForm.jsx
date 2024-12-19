import { useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Données envoyées:", { title, description });
    if (title.trim() && description.trim()) {
      try {
        await api.post("/", { title, description });
        fetchTodos();
        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Erreur lors de l’ajout de la tâche:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Titre de la tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description de la tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

TodoForm.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
};

export default TodoForm;
