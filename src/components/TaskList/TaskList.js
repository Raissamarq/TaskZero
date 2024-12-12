import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem.js";

function TaskList() {
  const [tasks, setTasks] = useState([""]); // 1 tarefa vazia inicialmente
  //const [subTask, setSubTask] = useState("");

  const addTask = () => setTasks([...tasks, ""]);

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index}>
          <TaskItem key={index} placeholder="Inserir Tarefa" />
        </div>
      ))}
      <button onClick={addTask} className="add-task">
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default TaskList;
