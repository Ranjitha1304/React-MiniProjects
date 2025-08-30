import React from "react";

const TaskItem = ({ taskName, isCompleted, onMarkDone }) => {
  return (
    <div className="task-item">
      <span>
        {taskName} → {isCompleted ? "✔️" : "❌"}
      </span>

      {/* ✅ Callback Prop */}
      {!isCompleted && (
        <button onClick={onMarkDone} className="done-btn">
          Mark as Done
        </button>
      )}
    </div>
  );
};

export default TaskItem;
