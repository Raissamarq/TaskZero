import React from "react";
import TaskList from "./components/TaskList/TaskList.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Suas tarefas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
