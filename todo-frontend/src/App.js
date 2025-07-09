import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
import './App.css';

const API = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API);
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  const addTodo = async (text) => {
    if (!text.trim()) return;
    try {
      const res = await axios.post(API, { text });
      setTodos([res.data, ...todos]);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  const updateTodo = async (id, updatedData) => {
    try {
      const res = await axios.put(`${API}/${id}`, updatedData);
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const clearCompleted = async () => {
    const completed = todos.filter(todo => todo.completed);

    for (const todo of completed) {
      await axios.delete(`${API}/${todo._id}`);
    }

    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="entry-section">
        <h1>ToDo List</h1>
        <TodoForm addTodo={addTodo} />
      </div>

      <FilterButtons filter={filter} setFilter={setFilter} />

      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>

      <button onClick={clearCompleted} className="clear-button">
        Clear Completed
      </button>
    </div>
  );
}

export default App;
