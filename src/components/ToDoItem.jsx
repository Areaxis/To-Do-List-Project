import { useState } from "react";

function ToDoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <div className="todo-row">
      {/* TODO BOX */}
      <div className="todo">
        {todo.done && <span className="check-mark">✔</span>}

        {editing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <span className="task-text">{todo.text}</span>
        )}
      </div>

      <div className="actions">
        {editing ? (
          <button
            onClick={() => {
              editTodo(todo.id, text);
              setEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <>
            <button
              className="check-btn"
              onClick={() => toggleTodo(todo.id)}
              disabled={todo.done}
            >
              Done
            </button>

            <button 
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
