import { useState } from "react";

function TodoRemover() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Prepare for live coding" },
    { id: 2, text: "Braid Mama's hair" },
    { id: 3, text: "Commence internship" },
  ]);

  const [text, setText] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setText(event.target.value);
  }

  function handleAdd() {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTodo = { id: Date.now(), text: trimmedText };

    setTodos((prev) => [...prev, newTodo]);

    // Clear text from input
    setText("");
  }

  function handleRemove(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>ToDo Remover</h1>

      <div className="todo-input">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type your todos"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="todos-list">
        {todos.length == 0 ? (
          <p>You have no todo task left</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => handleRemove(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoRemover;
