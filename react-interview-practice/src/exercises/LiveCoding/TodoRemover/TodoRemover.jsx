import React, { useState } from "react";

function TodoRemover() {
    // 1) State for todos (each todo has a stable id + text)
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn filter() method"},
        { id: 2, text: "Build a todo app"},
        { id: 3, text: "Prepare for interviews"},
    ]);

    // 2) State for input text
    const [text, setText] = useState("");

    // 3) Add todo (immutable)
    function handleAdd() {
        const trimmed = text.trim();
        if (!trimmed) return;

        // Generate a simple id
        const newTodo = { id: Date.now(), text: trimmed}

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


  return <div></div>;
}

export default TodoRemover;
