import React, { useState } from "react";
import "./TaskManager.css";

function TaskManager({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-card">
      <h3 className="task-title">Task Manager</h3>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span className={task.completed ? "completed" : ""}>
                {task.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
