import React from "react";
// TODO: Import the TodoProvider from your context directory
import { TodoProvider } from "./context/todocontext";
// TODO: Import TodoList component
import TodoList from "./components/todolist";

import "./App.css"

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      {/* 
        TODO: Use the TodoProvider to wrap the TodoList and provide context
      */}
      <TodoProvider>
        <TodoList/>
        </TodoProvider>
    </div>
  );
};

export default App;