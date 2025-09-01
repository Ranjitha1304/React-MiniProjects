import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask(""); // clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        style={{ padding: "8px", width: "250px" }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "8px 15px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
