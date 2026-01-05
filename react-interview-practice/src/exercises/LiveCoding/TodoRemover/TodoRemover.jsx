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
  return <div></div>;
}

export default TodoRemover;
