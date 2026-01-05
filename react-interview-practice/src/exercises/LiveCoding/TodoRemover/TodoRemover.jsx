import React, { useState } from "react";
import "./TodoRemover.css";

function TodoRemover() {
  // 1) State for todos (each todo has a stable id + text)
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn filter() method" },
    { id: 2, text: "Build a todo app" },
    { id: 3, text: "Prepare for interviews" },
  ]);

  // 2) State for input text
  const [text, setText] = useState("");

  // 3) Add todo (immutable)
  function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Generate a simple id
    const newTodo = { id: Date.now(), text: trimmed };

    // Functional update avoids stale state
    setTodos((prev) => [...prev, newTodo]);

    // Clear input
    setText("");
  }

  // 4) Remove todo by id (immutable)
  function handleRemove(id) {
    // filter() returns a NEW array, does not mutate
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  // 5) handle onChange to set Text
  function handleOnChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="todo-container">
      <h2>Todo Remover</h2>

      {/** Add section */}
      <div className="todo-add-section">
        <input
          type="text"
          className="todo-input"
          value={text}
          placeholder="Add a todo"
          onChange={handleOnChange}
        />{" "}
        <button onClick={handleAdd}>Add</button>
      </div>

      {/**List section */}
      <ol className="todo-list-section">
        {todos.length === 0 ? (
          <p>Congratulations, you have No todos left🎉</p>
        ) : (
          todos.map((todo) => (
            // Use stable id as key not index because index can change
            <li key={todo.id} className="todo-list-item">
              <span>{todo.text}</span>{" "}
              <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </li>
          ))
        )}
      </ol>
    </div>
  );
}

export default TodoRemover;
