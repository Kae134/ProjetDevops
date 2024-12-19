import PropTypes from "prop-types";
import api from "../api";

function TodoList({ todos, fetchTodos }) {
  const handleDelete = async (id) => {
    try {
      console.log("ID de la tâche à supprimer :", id);
      await api.delete(`/${id}`);

      await fetchTodos();
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche :", error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => handleDelete(todo.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchTodos: PropTypes.func.isRequired,
};

export default TodoList;
