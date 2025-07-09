import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState(todo.text);

  const handleToggle = () => {
    updateTodo(todo._id, { completed: !todo.completed });
  };

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(todo._id, { text: editVal });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
        />
      ) : (
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
