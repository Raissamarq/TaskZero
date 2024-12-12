import React from "react";

function TaskItem({ placeholder }) {
  return (
    <div className="task-item">
      <input type="text" placeholder={placeholder} className="task-input" />
      <button className="task-add-btn">+</button>
    </div>
  );
}

export default TaskItem;
