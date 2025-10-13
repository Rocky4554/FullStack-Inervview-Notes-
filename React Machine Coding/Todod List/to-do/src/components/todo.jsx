import React, { useState } from "react";
import "./Todo.css"; // Import CSS file

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const handleRemove = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  return (
    <div className="container">
      <h1 className="heading">My Todo App</h1>

      <div className="todo-input">
        <input
          className="input-box"
          value={text}
          type="text"
          placeholder="Enter your todo..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty">No tasks yet 😴</p>
        ) : (
          todos.map((todo, index) => (
            <div className="task" key={index}>
              <span>{todo}</span>
              <button className="remove-btn" onClick={() => handleRemove(todo)}>
            Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
