import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app-wrapper">
      <h2>ToDo-list</h2>
      <Form
        addTodo={(todo) => {
          setTodos((prev) => [...prev, todo]);
        }}
      />
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            onDelete={() => {
              setTodos((prev) => {
                return prev.filter((_, y) => i !== y);
              });
            }}
            key={i}
          >
            {todo}
          </Todo>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
