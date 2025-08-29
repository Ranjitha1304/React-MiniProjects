
import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <div className="task-card">
      <h3 className="task-title">My Task List</h3>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
