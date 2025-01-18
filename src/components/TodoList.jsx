import React, { useState } from "react";
// TODO: Import TodoForm component
import TodoForm from "./TodoForm";
import { useTodos } from "../context/todocontext";


const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  const handleAddTodo = () => {
    addTodo({
      id: Date.now(),
      title: newTodo,
      completed: false,
    });
    setNewTodo("");
    };
  
    const handleToggleTodo = (id) => {
    toggleComplete(id);
    };
  
    const handleDeleteTodo = (id) => {
    deleteTodo(id);
    };
  

  return (
    <div>
      {/* 
        TODO: Render TodoForm with the required props (addTodo, newTodo, setNewTodo)
      */}
  	<h1>Todo List</h1>

  	<div>
    	<input
      	type="text"
      	value={newTodo}
      	onChange={(e) => setNewTodo(e.target.value)}
      	placeholder="Add a new todo"
    	/>
    	<button onClick={handleAddTodo}>Add Todo</button>
  	</div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* 
              TODO: Apply conditional styling for completed todos (e.g., strikethrough)
            */}
            {/* TODO: Make the todo title clickable to toggle its completion status */}
            <span
          	style={{
            	textDecoration: todo.completed ? "line-through" : "none",
          	}}
        	>
          	{todo.title}
        	</span>

            <button onClick={() => handleToggleTodo(todo.id)}>{todo.completed ? "Completed" : "Pending"}</button>

            {/* TODO: Implement a delete button to remove a todo */}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;