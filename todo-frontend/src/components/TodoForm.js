import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
