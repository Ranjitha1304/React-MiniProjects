import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function AppDay8() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List - Day 8</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default AppDay8;
