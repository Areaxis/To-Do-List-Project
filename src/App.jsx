import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTodo() {
    if (task === "") return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  function editTodo(id, newText) {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  }

  return (
    <div className="app">
      <Header />

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ToDoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;