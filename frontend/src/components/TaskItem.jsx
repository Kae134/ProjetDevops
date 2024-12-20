import React from 'react';

const TaskItem = ({ task, onDelete }) => (
  <div className="task">
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
    <button className="deleteButton" onClick={() => onDelete(task.id)}>
      Delete
    </button>
  </div>
);

export default TaskItem;
