import React from "react";

// TODO: Identify the missing parameters required in TodoForm
const TodoForm = ({}) => {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo title"
      />
      <button
        onClick={() => {
          // TODO: Add the new todo when the button is clicked
          // TODO: Clear the input field after adding the todo
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;