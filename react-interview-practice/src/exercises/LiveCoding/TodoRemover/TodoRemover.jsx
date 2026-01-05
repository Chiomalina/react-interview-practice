import React, { useState } from "react";

function TodoRemover() {
  // Set todos state and initialize with a list of few items
  const [todos, setTodos] = useState([
    { id: 1, text: "Practice interview questions" },
    { id: 2, text: "Set a reminder for family call" },
    { id: 3, text: "Send a confirmation e-mail" },
  ]);

  // set text state and initialzed to an empty string
  const [text, setText] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setText(event.target.value);

    // clean up text
    setText("");
  }

  function handleAdd(id) {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newText = { id: Date.now, text: trimmedText };
    setTodos((prev) => [...prev, newText]);
  }

  function handleRemove(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-container">
      <h1>Todo Remover</h1>

      <div>
        {/**Manage text update */}
        <input
          type="text"
          value={text}
          placeholder="Type your todos here."
          onClick={handleChange}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      {/** Manage Removal button */}
    </div>
  );
}
