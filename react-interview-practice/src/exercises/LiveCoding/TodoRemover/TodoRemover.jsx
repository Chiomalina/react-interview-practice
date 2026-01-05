import { Toast } from "bootstrap";
import { useState } from "react";

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
    event.preventDefault;
    setText(event.target.value);
  }

  function handleAdd() {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newText = { id: Date.now(), text: trimmedText };
    setTodos((prev) => [...prev, newText]);

    // clean up text
    setText("");
    alert(`Todo witht the id ${newText.id} has been successfully added`);
  }

  function handleRemove(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    alert(`todo with the id ${id} has been sucessfully deleted`);
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
          onChange={handleChange}
        />

        <button onClick={() => handleAdd()}>Add</button>
      </div>

      {/** Manage Removal button */}
      {todos.length == 0 ? (
        <p>You have no todo's</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <div>
              <li key={todo.id}>{todo.text}</li>{" "}
              <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoRemover;
